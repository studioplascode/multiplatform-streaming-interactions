export type wsMessage = {
    header: header;
    body: object | widget;
}

export type header =
    "id" |
    "widget";

export type widget =
    "chatOverlay";