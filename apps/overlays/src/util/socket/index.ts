import { default as client } from "./client";
import { twitchNamespace } from "./namespaces";

const Socket = {
  client: client,
  twitch: twitchNamespace
};

export default Socket;
