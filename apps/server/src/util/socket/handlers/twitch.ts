import { Socket as SocketIO } from "socket.io";
import { Chat } from "twitch-js";
import { parseTwitchMessage } from "../parsers";
import logger from "logger";
import {
  TwitchNamespaceClientToServerEvents,
  TwitchNamespaceServerToClientEvents,
  loggerTitle,
} from "shared-types";
import { handlerStore } from ".";

export const subscribeToTwitchChat = async (
  channel: string,
  socket: SocketIO<
    TwitchNamespaceClientToServerEvents,
    TwitchNamespaceServerToClientEvents
  >
) => {
  let chat = handlerStore.get(socket.id)?.twitchChat;

  if (!chat) {
    chat = new Chat({ log: { level: "error" } });

    handlerStore.set(socket.id, {
      twitchChat: chat,
    });

    await chat.connect();
    await chat.join(channel);

    // relay message
    chat.on("PRIVMSG", (message) => {
      logger.debug(loggerTitle.SOCKET, "Twitch chat message received");
      socket.emit("message", parseTwitchMessage(message));
    });

    // remove chat on disconnect
    socket.on("disconnect", () => {
      chat?.removeAllListeners();
      handlerStore.delete(socket.id);
    });
  }
};