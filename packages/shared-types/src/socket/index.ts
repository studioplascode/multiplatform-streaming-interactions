import { Chat } from "twitch-js";

export interface ClientToServerEvents {
  //authorize: (token: string) => boolean;
}

export interface ServerToClientEvents {
  //blocked: (retryMs: Number) => void;
}

export type handlerStoreValue = {
  twitchChat?: Chat;
};

export * from "./namespaces";