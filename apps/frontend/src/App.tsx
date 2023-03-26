import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './widgets/chatOverlay/ChatOverlay';
import configureStore from './redux/store';
import { Provider } from "react-redux";
import ReconnectingWebSocket from 'reconnecting-websocket';
import { setId, setWidget } from './redux/actions/configActions';
import { twitchChatMessage, widget, wsMessage } from './types';
import Widget from './widgets/Widget';
import { newTwitchChatMessage } from './redux/actions/twitchActions';

const store = configureStore();
const ws = new ReconnectingWebSocket("ws://localhost:4001");

//const id = {id: window.location.pathname.split('/')[0]};
const id = {id: "imaron85"};

store.dispatch(setId(id));
const openMsg:wsMessage = {
  header: "id",
  body: id
};

function App() {
  return (
    <Widget/>
  );
}

//exports the app but wrapped in the redux provider
//only renders app after websocket connection was successful
function AppProviderWrapper(this: any) {
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

export default function WrapperWrapper() {
  return <AppProviderWrapper />
}

function handelWsMessage(event: MessageEvent<any>) {
  const msg = JSON.parse(event.data) as wsMessage;
  console.log(msg);

  switch(msg.header){
    case "widget":
      store.dispatch(setWidget(msg.body as widget));
      break;
    case "twitchMessage":
      store.dispatch(newTwitchChatMessage(msg.body as twitchChatMessage));
      break;
  }
}