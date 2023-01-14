import { twitchChatMessage } from "../../types";
import { action } from "../reduxTypes";

const initialState = {
    chatMessageLimit: 50,
    chatMessages: [] as twitchChatMessage[]
};
 
 const twitchReducer = (state = initialState, action: action) => {
 
    switch (action.type) {
        case "twitch/newChatMessage":
            if(state.chatMessages.length < state.chatMessageLimit)
                return {...state, chatMessages: [action.payload, ...state.chatMessages]};
            else {
                //if too many messages, get current messages
                let newMsgs = [...state.chatMessages];
                //pop oldets message
                newMsgs.pop();
                return {...state, chatMessages: [action.payload, ...newMsgs]};
            }
        default:
            return state;
    }
 };
 
 export default twitchReducer;
 