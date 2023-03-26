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
  }; //copy remaining tags
};
