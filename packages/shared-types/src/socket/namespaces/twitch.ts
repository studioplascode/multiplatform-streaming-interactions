import { ClientToServerEvents, ServerToClientEvents } from "..";
import { twitchChatMessage } from "../../twitch";

export interface TwitchNamespaceClientToServerEvents
  extends ClientToServerEvents {
  
}

export interface TwitchNamespaceServerToClientEvents
  extends ServerToClientEvents {
  message: (msg : twitchChatMessage) => void;
}