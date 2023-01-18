import { legacy_createStore as createStore, combineReducers } from "redux";
import { action, state } from "./reduxTypes";

import configReducer from "./reducer/configReducer";
import twitchReducer from "./reducer/twitchReducer";

const appReducer = combineReducers({
    config: configReducer,
    twitch: twitchReducer
});

const rootReducer = (state: state, action: action) => {
   return appReducer(state, action);
};

// @ts-ignore
const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default configureStore;