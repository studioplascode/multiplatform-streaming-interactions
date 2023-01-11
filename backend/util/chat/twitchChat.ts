const tmi = require("tmi.js");

export default function twitchChat () {
    const client = new tmi.Client({
        channels: ["imaron85"]
    });

    client.connect();

    client.on("message", (channel:any, tags:any, message:any, self:any) => {
        console.log(message);
        console.log(tags);
        console.log(self);
    });
}