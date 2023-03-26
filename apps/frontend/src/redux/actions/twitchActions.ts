import { twitchChatMessage } from "../../types";
import { action } from "../reduxTypes";

export const newTwitchChatMessage = (msg: twitchChatMessage) => {
    const obj: action = {
       type: "twitch/newChatMessage",
       payload: msg,
    };
 
    return obj;
};