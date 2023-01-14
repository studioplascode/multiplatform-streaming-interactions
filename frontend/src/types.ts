export type wsMessage = {
    header: header;
    body: object | string;
}

export type header =
    "id";