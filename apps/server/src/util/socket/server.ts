import logger from "logger";
import { loggerTitle } from "shared-types";
import { Server } from "socket.io";
import * as util from "util";

const io = new Server(parseInt(process.env.SOCKET_SERVER_PORT!) || 4001, {
  cors: {
    origin: ["http://localhost:4000", "https://admin.socket.io"],
    methods: ["GET", "POST"],
    credentials: false,
  },
  transports: ["websocket", "polling"],
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
