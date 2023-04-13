import { useState } from "react";
import logger from "logger";
import { loggerTitle } from "shared-types";
import "./App.css";
import Socket from "./util/socket";
import Chat from "./components/chat";


function App() {
  return (
    <div className="App">
      <Chat/>
    </div>
  );
}

export default App;
