import React from "react";
import ReactDOM from "react-dom";
import RootProvider from "providers/RootProvider";
import App from "./App";
import "./styles/reset.css";
import "./styles/main.css";

const appWithProviders = (
  <RootProvider>
    <App />
  </RootProvider>
);

ReactDOM.render(appWithProviders, document.getElementById("root"));
