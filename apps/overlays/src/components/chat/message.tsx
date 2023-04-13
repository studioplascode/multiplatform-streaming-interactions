import { twitchChatMessage } from "shared-types";

export default function ChatOverlayMessage(props: Partial<twitchChatMessage>) {
  return (
    <div className="chatOverlayMessage">
      {props?.badges?.map((b, i) => (
        <img
          className="chatOverlayMessageBadges"
          src={b.link}
          key={"badgeKey" + i}
        />
      ))}
      <p className="chatOverlayMessageName">{props.name}:</p>
      <p className="chatOverlayMessageContent">{props.content}</p>
    </div>
  );
}
