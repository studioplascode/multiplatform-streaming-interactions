import logger from "logger";
import React from "react";
import ReactDOM from "react-dom/client";
import { loggerTitle } from "shared-types";
import App from "./App";
import "./index.css";
import Socket from "./util/socket";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Socket.twitch.emit("subscribe_chat", "imaron85");
Socket.twitch.on("message", (msg) => {
  logger.info(
    loggerTitle.SOCKET,
    "Twitch Message in Overlays:",
    JSON.stringify(msg)
  );
});

logger.stackoverflow(loggerTitle.SOCKET, "Twitch Message in Overlays:");
