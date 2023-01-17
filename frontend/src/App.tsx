import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './widgets/chatOverlay/ChatOverlay';
import configureStore from './redux/store';
import { Provider } from "react-redux";
import ReconnectingWebSocket from 'reconnecting-websocket';
import { setId, setWidget } from './redux/actions/configActions';
import { widget, wsMessage } from './types';

const store = configureStore();
const ws = new ReconnectingWebSocket("ws://localhost:4001");

const id = {id: window.location.pathname.split('/')[0]};
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
    ws.addEventListener("message", handelWsMessage);
    ws.send(JSON.stringify(openMsg));
  };

  const wsCloseFunction = () => {
    setWebsocket(false);
    ws.removeEventListener("message", handelWsMessage);
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

function handelWsMessage(event: MessageEvent<any>) {
  const msg = JSON.parse(event.data) as wsMessage;

  switch(msg.header){
    case "widget":
      store.dispatch(setWidget(msg.body as widget));
  }
}