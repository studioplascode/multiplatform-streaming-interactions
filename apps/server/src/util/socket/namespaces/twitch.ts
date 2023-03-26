import logger from "logger";
import {
  loggerTitle,
  TwitchNamespaceClientToServerEvents,
  TwitchNamespaceServerToClientEvents,
} from "shared-types";
import { Namespace } from "socket.io";
import io from "../server";
import * as util from "util";

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
});

export default twitchNamespace;
