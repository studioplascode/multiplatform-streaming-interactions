const ws = require("ws");
import { Chat, ChatEvents } from "twitch-js";
import WebSocket, { WebSocketServer } from "ws";
import { wsMessage, wsResponse } from "../../types";

const wss = new WebSocketServer({ port: 4001 });

export default function twitchChat() {
  let client: Chat;
  wss.on("connection", (ws: WebSocket) => {
    console.log("🔥 new web socket client connected!");

    //sending message
    ws.on("message", (data: String) => {
      let dataParsed: wsMessage = { header: "", body: { id: "" } };

      // try to parse the data, if it fails, close the connection
      try {
        dataParsed = JSON.parse(data.toString());
      } catch (e) {
        ws.send(JSON.stringify({ header: "error", body: { error: "invalid json string" } }));
        ws.close();
        return;
      }
      console.log(`📥 Client has sent us: ${dataParsed?.body}`);

      if (typeof dataParsed?.body?.id === "string" && dataParsed?.body?.id.length > 0) {
        connectToTwitchChat(dataParsed.body.id, ws).then((res: Chat) => (client = res));
        let response: wsResponse = { header: "Widget", body: { widget: { type: "chatOverlay" } } };
        ws.send(JSON.stringify(response));
      }
    });

    // handling what to do when clients disconnects from server
    ws.on("close", () => {
      console.log("the client has disconnected");
      if (client) client.disconnect();
    });

    // handling client connection error
    ws.onerror = function () {
      console.log("Some Error occurred");
      if (client) client.disconnect();
    };
  });
}

const handleTwitchMessage: (message: any, ws: WebSocket) => void = (message, ws) => {
  // received message from Twitch, now parse it before sending to client
  ws.send(message.event);
};

const connectToTwitchChat: (channel: string, ws: WebSocket) => Promise<Chat> = async (channel, ws) => {
  const chat: Chat = new Chat({});

  await chat.connect();
  await chat.join(channel);

  chat.on("PRIVMSG", (message) => handleTwitchMessage(message, ws));

  return chat;
};
