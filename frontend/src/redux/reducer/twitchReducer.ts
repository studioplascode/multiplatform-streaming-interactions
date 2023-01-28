import { twitchChatMessage } from "../../types";
import { action, twitchState } from "../reduxTypes";

const initialState = {
    chatMessageLimit: 5,
    chatMessages: [] as twitchChatMessage[]
} as twitchState;
 
 const twitchReducer = (state:twitchState = initialState, action: action):twitchState => {
 
    switch (action.type) {
        case "twitch/newChatMessage":
            const msg = action.payload as twitchChatMessage;
            if(state.chatMessages.length < state.chatMessageLimit)
                return {...state, chatMessages: [msg, ...state.chatMessages]};
            else {
                //if too many messages, get current messages
                let newMsgs = [...state.chatMessages];
                //pop oldets message
                newMsgs.pop();
                return {...state, chatMessages: [msg, ...newMsgs]};
            }
        default:
            return state;
    }
 };
 
export default twitchReducer;