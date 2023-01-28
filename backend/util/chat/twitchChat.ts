const ws = require("ws");
import { Chat, ChatEvents } from "twitch-js";
import WebSocket, { WebSocketServer } from "ws";
import { twitchChatMessage, wsMessage, wsResponse } from "../../types";

const wss = new WebSocketServer({ port: 4001 });

export default function twitchChat() {
  let client: Chat;
  wss.on("connection", (ws: WebSocket) => {

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

      if (typeof dataParsed?.body?.id === "string" && dataParsed?.body?.id.length > 0) {
        connectToTwitchChat(dataParsed.body.id, ws).then((res: Chat) => (client = res));

        // send response
        let response: wsResponse = { header: "Widget", body: { widget: { type: "chatOverlay" } } };
        ws.send(JSON.stringify(response));
      }
    });

    // handling what to do when clients disconnects from server
    ws.on("close", () => {
      if (client) client.disconnect();
    });

    // handling client connection error
    ws.onerror = function () {
      if (client) client.disconnect();
    };
  });
}


const handleTwitchMessage: (message: any, ws: WebSocket) => void = (message, ws) => {
  let parsedMessage: twitchChatMessage = message.map((msg: any) => Object({
    channel: msg.channel.slice(1),
    user: msg.user,
    name: msg.tags.displayName,
    timestamp: msg.timestamp,
    content: msg.message,
    badges: [],
    sub: msg.tags.subscriber != 0,
    isMod: msg.tags.mod != 0,
    firstMsg: msg.tags.firstMsg != 0,
    color: msg.tags.color,
    tags: msg.tags
  }));

  // received message from Twitch, now parse it before sending to client
  ws.send(JSON.stringify({ header: "twitchMessage", body: parsedMessage }));
};

const connectToTwitchChat: (channel: string, ws: WebSocket) => Promise<Chat> = async (channel, ws) => {
  const chat: Chat = new Chat({});

  await chat.connect();
  await chat.join(channel);

  // handle chat messages
  chat.on("PRIVMSG", (message) => handleTwitchMessage(message, ws));

  return chat;
};

