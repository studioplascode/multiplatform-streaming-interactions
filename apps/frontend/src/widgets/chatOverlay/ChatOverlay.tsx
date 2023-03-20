import ChatOverlayMessage from "./ChatOverlayMessage";

import ReconnectingWebSocket from "reconnecting-websocket";
import { useEffect, useState } from "react";

let messages:any[] = [];


const Chat = (props:any) => {
    const msg = props.twitch?.chatMessages;

    return(
        <div className="chat">
            {msg.map((m:any) => (<ChatOverlayMessage name={m.name} content={m.content}/>))}
        </div>
    );
}

export default Chat;