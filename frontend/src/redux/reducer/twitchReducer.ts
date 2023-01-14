import { action } from "../reduxTypes";

const initialState = {

};
 
 const storageReducer = (state = initialState, action: action) => {
 
    switch (action.type) {
        default:
            return state;
    }
 };
 
 export default storageReducer;
 