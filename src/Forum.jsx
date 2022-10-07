import React from "react";
import "./Forum.css"
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import ForumPage from "./pages/ForumPage/ForumPage";

export default function Forum() {
  return (
    <div className="Forum">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <ForumPage/>
        {/* <Profile/> */}
        {/* <Auth/> */}
    </div>
  );
}
