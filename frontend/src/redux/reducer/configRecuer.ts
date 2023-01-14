import { action } from "../reduxTypes";

const initialState = {
    id: undefined,
    widget: undefined
};
 
 const configReducer = (state = initialState, action: action) => {
 
    switch (action.type) {
        case "config/setId": 
            return {...state, id: action.payload};
        case "config/setWidget":
            return {...state, widget: action.payload};

        default:
            return state;
    }
};
 
export default configReducer;