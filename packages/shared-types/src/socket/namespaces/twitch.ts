import { ClientToServerEvents, ServerToClientEvents } from "..";
import { twitchChatMessage } from "../../twitch";

export interface TwitchNamespaceClientToServerEvents
  extends ClientToServerEvents {
  subscribe_chat: (channel: string) => void;
}

export interface TwitchNamespaceServerToClientEvents
  extends ServerToClientEvents {
  message: (msg : twitchChatMessage) => void;
}