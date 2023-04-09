import { twitchChatMessage } from "shared-types";
import Socket from "../../util/socket";
import ChatOverlayMessage from "./message";
import { useState, useEffect } from "react";
import "./styles.css";

export default function Chat(props: any) {
  const [messages, setMsg] = useState([] as twitchChatMessage[]);

  useEffect(() => {
    Socket.twitch.emit("subscribe_chat", "imaron85");
    Socket.twitch.on("message", (msg) => {
      console.log(msg);

      const newMessages = [...messages];
      newMessages.push(msg);
      //newMessages.length > 5 && newMessages.shift();
      setMsg(newMessages);
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
