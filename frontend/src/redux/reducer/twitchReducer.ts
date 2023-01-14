import { action } from "../reduxTypes";

const initialState = {

};
 
 const twitchReducer = (state = initialState, action: action) => {
 
    switch (action.type) {
        default:
            return state;
    }
 };
 
 export default twitchReducer;
 