import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Forum from "./Forum";
import Profile from "../src/Pages/Profile/Profile"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/forum" component={Forum} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Forum />
  // </React.StrictMode>
);
