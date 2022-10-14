import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Forum from "./Forum";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Forum /> */}
  </React.StrictMode>
);
