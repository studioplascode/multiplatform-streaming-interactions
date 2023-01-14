import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './widgets/chatOverlay/ChatOverlay';
import configureStore from './redux/store';
import { Provider } from "react-redux";
import ReconnectingWebSocket from 'reconnecting-websocket';
import { setId } from './redux/actions/configActions';
import { wsMessage } from './types';

const store = configureStore();
const ws = new ReconnectingWebSocket("ws://localhost:4001");
const id = window.location.pathname.split('/')[0];
store.dispatch(setId(id));
const openMsg:wsMessage = {
  header: "id",
  body: id
};

function App() {
  return (
    <Chat/>
  );
}

//exports the app but wrapped in the redux provider
//only renders app after websocket connection was successful
export default function app_provider_wrapper(this: any) {
  const [websocket, setWebsocket] = useState(false);
  ws.onopen = () => {
    setWebsocket(true);
    ws.send(JSON.stringify(openMsg));
  };
  const wsCloseFunction = () => {
    setWebsocket(false);
  };

  ws.onclose = wsCloseFunction;
  ws.onerror = wsCloseFunction;

  return (
    <Provider store={store}>
      {websocket ? (
        <App/>
      ) : (
        <></>
      )}
    </Provider>
  );
}