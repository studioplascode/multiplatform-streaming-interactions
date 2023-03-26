import { Tags } from "twitch-js";

export type wsMessage = {
    header: header;
    body: id | widget | twitchChatMessage;
}

export type id = {
    id: string;
}

export type header = "id"
    | "widget"
    | "twitchMessage";

export type widgetType =
    "chatOverlay";

export type widget = {
    type: widgetType;
    style: StyleSheet;
}

export type chatMessage = youtubeChatMessage | twitchChatMessage;

export type youtubeChatMessage = {};

export type twitchChatMessage = {
    channel: string; //where message was posted
    user: string; //username
    name: string; //display name
    timestamp: Date;
    content: string;
    badges: {
        name: string;
        link: string;
    }[]; //badge name / image links
    sub: boolean;
    isMod: boolean;
    firstMsg: boolean;
    color: string;
    tags?: {
        [key: string]: string | number | boolean;
    } //copy remaining tags
};