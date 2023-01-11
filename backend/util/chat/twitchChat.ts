const tmi = require("tmi.js");
const WS = require("ws");
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 4001});

export default function twitchChat () {
    const client = new tmi.Client({
        channels: ["imaron85"]
    });

    client.connect();

    wss.on("connection", (ws:any) => {
        console.log("new client connected");

        client.on("message", (channel:any, tags:any, message:any, self:any) => {
            console.log(`${tags["display-name"]}: ${message}`);
            ws.send(JSON.stringify({name: tags["display-name"], content: message}));
        });

        //sending message
        ws.on("message", (data:any) => {
            console.log(`Client has sent us: ${data}`)
        });
        // handling what to do when clients disconnects from server
        ws.on("close", () => {
            console.log("the client has connected");
        });
        // handling client connection error
        ws.onerror = function () {
            console.log("Some Error occurred")
        }
    });
}

// import TwitchJS from "twitch-js";

// const client = new TwitchJS({username: "justinfan1234", token:""});

// export default function twitchChat () {
//     client.chat.join("#imaron85");
//     client.chat.on("*", console.log);
// }