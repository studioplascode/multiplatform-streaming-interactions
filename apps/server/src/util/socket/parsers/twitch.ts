import { twitchChatMessage } from "shared-types";

export const parseTwitchMessage = (message: any) => {
  //TODO update using zod
  const parsedMessage: twitchChatMessage = {
    channel: message.channel.slice(1),
    user: message.user,
    name: message.tags.displayName,
    timestamp: message.timestamp,
    content: message.message,
    badges: [],
    sub: message.tags.subscriber != 0,
    isMod: message.tags.mod != 0,
    firstMsg: message.tags.firstMsg != 0,
    color: message.tags.color,
    tags: message.tags,
  };
  return parsedMessage;
};
