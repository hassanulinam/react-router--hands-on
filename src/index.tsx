import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProfileContextProvider from "./context/ProfileContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileContextProvider>
        <App />
      </ProfileContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
