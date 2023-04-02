import { io, Socket } from "socket.io-client";
import logger from "logger";
import {
  loggerTitle,
  TwitchNamespaceClientToServerEvents,
  TwitchNamespaceServerToClientEvents,
} from "shared-types";

const twitchNamespace: Socket<TwitchNamespaceServerToClientEvents, TwitchNamespaceClientToServerEvents> = io("http://localhost:4001/twitch", {
    transports: ["websocket", "polling"],
});

export default twitchNamespace;