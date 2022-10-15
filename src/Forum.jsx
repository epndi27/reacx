import React from "react";
import "./Forum.css"
<<<<<<< HEAD
import Profile from "../src/pages/Profile/Profile";
import Auth from "../src/pages/Auth/Auth";
import ForumPage from "../src/pages/ForumPage/ForumPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
import Profile from "../src/Pages/Profile/Profile";
import Auth from "../src/Pages/Auth/Auth";
import ForumPage from "../src/Pages/ForumPage/ForumPage";
>>>>>>> 5a35688389ab2e2fbb293a9f61aa5a249ca8e50a

export default function Forum() {
  return (
    <div className="Forum">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Router>
          <Switch>
            <Route path="/forum/Login" component={Auth} />
            {/* <Route path="/forumpage" component={ForumPage} /> */}
            <Route path="/forum/profile" component={Profile} />
          </Switch>
        </Router>
        <ForumPage/> 
        {/* <Profile/> */}
        {/* <Auth/> */}
    </div>
  );
}
