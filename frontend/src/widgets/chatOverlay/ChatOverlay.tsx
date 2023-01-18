import ChatOverlayMessage from "./ChatOverlayMessage";

import ReconnectingWebSocket from "reconnecting-websocket";
import { useEffect, useState } from "react";

let messages:any[] = [];


const Chat = (props:any) => {
    const [msg, setMsg] = useState(messages);
    
    useEffect(() => {
        const ws = new ReconnectingWebSocket("ws://localhost:4001");

        ws.onopen = () => {
            console.log("open")
            ws.onmessage = (m:any) => {
                console.log(m);
                setMsg([...msg].concat([JSON.parse(m.data)]));
            }
        }
    }, []);

    return(
        <div className="chat">
            {msg.map(m => (<ChatOverlayMessage name={m.name} content={m.content}/>))}
        </div>
    );
}

export default Chat;