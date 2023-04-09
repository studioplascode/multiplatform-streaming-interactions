import { Socket as SocketIO } from "socket.io";
import { Chat } from "twitch-js";
import { parseTwitchMessage } from "../parsers";

export const subscribeToTwitchChat = async (
  channel: string,
  socket: SocketIO
) => {
  const chat: Chat = new Chat({});

  await chat.connect();
  await chat.join(channel);

  // handle chat messages
  chat.on("PRIVMSG", (message) => {
    socket.emit("message", parseTwitchMessage(message));
  });
};
