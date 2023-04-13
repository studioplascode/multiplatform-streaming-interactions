import { twitchChatMessage } from "shared-types";
import Socket from "../../util/socket";
import ChatOverlayMessage from "./message";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Chat(props: any) {
  const [messages, setMsg] = useState([] as twitchChatMessage[]);

  useEffect(() => {
    Socket.twitch.emit("subscribe_chat", "imaron85");
    Socket.twitch.removeAllListeners();
    Socket.twitch.on("message", (msg) => {
      setMsg((oldMessages) => {
        if (oldMessages.length > 4) oldMessages.shift();
        return [...oldMessages, msg];
      });
    });
  }, []);

  return (
    <div className="chat">
      {messages.map((m, i) => (
        <ChatOverlayMessage
          name={m.name}
          content={m.content}
          key={"msgKey" + i}
        />
      ))}
    </div>
  );
}
