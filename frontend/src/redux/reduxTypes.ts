import { id, twitchChatMessage, widget, youtubeChatMessage } from "../types";

export type reducer = 
    "twitch" |
    "config";

export type actionNames = 
    "setId" |
    "setWidget" |
    "newChatMessage";

export type actionTypes = `${reducer}/${actionNames}`;

export type action = {
    payload: actionPayloads,
    type: actionTypes
};

export type actionPayloads = id | widget | twitchChatMessage | youtubeChatMessage;

export type twitchState = {
    chatMessageLimit: number,
    chatMessages: twitchChatMessage[]
}