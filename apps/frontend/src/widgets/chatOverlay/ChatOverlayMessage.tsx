import "./ChatOverlayMessage.css";

const ChatOverlayMessage = (props:any) => {
    return(
        <div className="chatOverlayMessage">
            <p className="chatOverlayMessageName">{props.name}:</p>
            <p className="chatOverlayMessageContent">{props.content}</p>
        </div>
    );
}

export default ChatOverlayMessage;