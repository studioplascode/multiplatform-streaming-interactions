import { widget } from "../../types";
import { action, configState } from "../reduxTypes";

const initialState = {
    id: undefined,
    widget: undefined
} as configState;
 
 const configReducer = (state:configState = initialState, action: action):configState => {
 
    switch (action.type) {
        case "config/setId": 
            return {...state, ...action.payload};
        case "config/setWidget":
            const widget = action.payload as widget;
            return {...state, ...widget};

        default:
            return state;
    }
};
 
export default configReducer;