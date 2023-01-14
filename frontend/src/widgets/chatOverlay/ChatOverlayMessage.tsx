import "./ChatMessage.css";

export default function ChatMessage(props:any) {
    return(
        <div className="chatMessage">
            <p className="chatMessageName">{props.name}:</p>
            <p className="chatMessageContent">{props.content}</p>
        </div>
    );
}