import { legacy_createStore as createStore, combineReducers } from "redux";


const appReducer = combineReducers({

});

const rootReducer = (state: any, action: any) => {
   if (action.type === "RELOAD") return appReducer(undefined, action);
   return appReducer(state, action);
};

// @ts-ignore
const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default configureStore;