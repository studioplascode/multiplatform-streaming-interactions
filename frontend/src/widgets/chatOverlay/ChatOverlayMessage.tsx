import "./ChatOverlayMessage.css";

export default function ChatOverlayMessage(props:any) {
    return(
        <div className="chatOverlayMessage">
            <p className="chatOverlayMessageName">{props.name}:</p>
            <p className="chatOverlayMessageContent">{props.content}</p>
        </div>
    );
}