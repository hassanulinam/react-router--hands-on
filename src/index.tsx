import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProfileContextProvider from "./context/ProfileContext";

ReactDOM.render(
  <BrowserRouter>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
