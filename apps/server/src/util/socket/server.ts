import { Server } from "socket.io";

const io = new Server(parseInt(process.env.SOCKET_SERVER_PORT!) || 4001,
{
  cors: {
    origin: [
      "http://localhost:4000",
      "https://admin.socket.io"
    ],
    methods: ["GET", "POST"],
    credentials: false
  },
  transports: ["websocket", "polling"]
}
);

export default io;