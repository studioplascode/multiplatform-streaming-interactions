import logger from "logger";
import {
  loggerTitle,
  TwitchNamespaceClientToServerEvents,
  TwitchNamespaceServerToClientEvents,
} from "shared-types";
import { Namespace } from "socket.io";
import io from "../server";
import * as util from "util";
import { subscribeToTwitchChat } from "../handlers";

const twitchNamespace: Namespace<
  TwitchNamespaceClientToServerEvents,
  TwitchNamespaceServerToClientEvents
> = io.of("/twitch");

twitchNamespace.on("connection_error", (err) => {
  logger.error(
    loggerTitle.SOCKET,
    "Twitch Namespace",
    util.inspect(err.req),
    err.code,
    err.message
  );
});

twitchNamespace.on("connection", (socket) => {
  logger.debug(
    loggerTitle.SOCKET,
    "Twitch Namespace",
    "Socket connected:",
    socket.id
  );

  socket.on("subscribe_chat", (channel) => {
    subscribeToTwitchChat(channel, socket);
  });
});

export default twitchNamespace;
