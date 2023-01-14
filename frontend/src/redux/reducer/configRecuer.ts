import { action } from "../reduxTypes";

const initialState = {
    id: undefined
};
 
 const configReducer = (state = initialState, action: action) => {
 
    switch (action.type) {
        case "config/setId": 
            return {...state, id: action.payload};

        default:
            return state;
    }
};
 
export default configReducer;