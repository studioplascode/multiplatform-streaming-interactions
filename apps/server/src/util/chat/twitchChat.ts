import { Chat, ChatEvents } from "twitch-js";
import { twitchChatMessage } from "shared-types";
import { io } from "../socket";
import { Socket } from "socket.io-client";

// TODO to be reimplementend with socket io
// needs proper socket architecture first

// export default function twitchChat() {
//   let client: Chat;
//   wss.on("connection", (ws: WebSocket) => {

//     //sending message
//     ws.on("message", (data: String) => {
//       let dataParsed: wsMessage = { header: "", body: { id: "" } };

//       // try to parse the data, if it fails, close the connection
//       try {
//         dataParsed = JSON.parse(data.toString());
//       } catch (e) {
//         ws.send(JSON.stringify({ header: "error", body: { error: "invalid json string" } }));
//         ws.close();
//         return;
//       }

//       if (typeof dataParsed?.body?.id === "string" && dataParsed?.body?.id.length > 0) {
//         connectToTwitchChat("imaron85", ws).then((res: Chat) => (client = res));

//         // send response
//         let response: wsResponse = { header: "widget", body: { widget: { type: "chatOverlay" } } };
//         ws.send(JSON.stringify(response));
//       }
//     });

//     // handling what to do when clients disconnects from server
//     ws.on("close", () => {
//       if (client) client.disconnect();
//     });

//     // handling client connection error
//     ws.onerror = function () {
//       if (client) client.disconnect();
//     };
//   });
// }


const handleTwitchMessage: (message: any, ws: Socket) => void = (message, ws) => {
  let parsedMessage: twitchChatMessage = {
    channel: message.channel.slice(1),
    user: message.user,
    name: message.tags.displayName,
    timestamp: message.timestamp,
    content: message.message,
    badges: [],
    sub: message.tags.subscriber != 0,
    isMod: message.tags.mod != 0,
    firstMsg: message.tags.firstMsg != 0,
    color: message.tags.color,
    tags: message.tags
  };

  // received message from Twitch, now parse it before sending to client
  ws.send(JSON.stringify({ header: "twitchMessage", body: parsedMessage }));
};

const connectToTwitchChat: (channel: string, ws: Socket) => Promise<Chat> = async (channel, ws) => {
  const chat: Chat = new Chat({});

  await chat.connect();
  await chat.join(channel);

  // handle chat messages
  chat.on("PRIVMSG", (message) => handleTwitchMessage(message, ws));

  return chat;
};