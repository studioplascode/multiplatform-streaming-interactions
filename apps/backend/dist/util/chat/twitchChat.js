"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmi = require("tmi.js");
const WS = require("ws");
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 4001 });
function twitchChat() {
    const client = new tmi.Client({
        channels: ["imaron85"]
    });
    client.connect();
    wss.on("connection", (ws) => {
        console.log("new client connected");
        client.on("message", (channel, tags, message, self) => {
            console.log(`${tags["display-name"]}: ${message}`);
            ws.send(JSON.stringify({ name: tags["display-name"], content: message }));
        });
        //sending message
        ws.on("message", (data) => {
            console.log(`Client has sent us: ${data}`);
        });
        // handling what to do when clients disconnects from server
        ws.on("close", () => {
            console.log("the client has connected");
        });
        // handling client connection error
        ws.onerror = function () {
            console.log("Some Error occurred");
        };
    });
}
exports.default = twitchChat;
// import TwitchJS from "twitch-js";
// const client = new TwitchJS({username: "justinfan1234", token:""});
// export default function twitchChat () {
//     client.chat.join("#imaron85");
//     client.chat.on("*", console.log);
// }
