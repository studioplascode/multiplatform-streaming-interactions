import logger from "logger";
import { loggerTitle } from "shared-types";
import { Server } from "socket.io";
import * as util from "util";
import { instrument } from "@socket.io/admin-ui";

const io = new Server(parseInt(process.env.SOCKET_SERVER_PORT!) || 4001, {
  cors: {
    origin: ["http://localhost:4000", "https://admin.socket.io"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
});

instrument(io, {
  auth: false,
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
});

io.engine.on("connection_error", (err) => {
  logger.error(
    loggerTitle.SOCKET,
    "Root Namespace",
    util.inspect(err.req),
    err.code,
    err.message
  );
});

io.on("connection", (socket) => {
  logger.debug(loggerTitle.SOCKET, "Socket connected:", socket.id);
});

export default io;
