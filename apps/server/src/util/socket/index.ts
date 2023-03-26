import io from "./server";
import * as namespaces from "./namespaces";

const Socket = {
  server: io,
  twitch: namespaces.twitchNamespace,
};

export default Socket;
