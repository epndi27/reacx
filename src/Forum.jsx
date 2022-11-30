import React from "react";
import "./Forum.css"
import Profile from "../src/Pages/Profile/Profile";
import Auth from "../src/Pages/Auth/Auth";
import AuthLogin from "../src/Pages/Auth/AuthLogin";
import AuthSignUp from "../src/Pages/Auth/AuthSignup";
import ForumPage from "../src/Pages/ForumPage/ForumPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Forum() {
  return (
    <div className="Forum">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Router>
          <Switch>
            <Route path="/forum/Login" component={AuthLogin} />
            <Route path="/forum/SignUp" component={AuthSignUp} />
            <Route path="/forumpage" component={ForumPage} />
            <Route path="/forum/profile" component={Profile} />
          </Switch>
        </Router>
        {/* <ForumPage/> 
        {/* <Profile/> */}
        {/* <Auth/> */} 
    </div>
  );
}
