import React from "react";
import "./Forum.css"
import Profile from "../src/Pages/Profile/Profile";
import Auth from "../src/Pages/Auth/Auth";
import ForumPage from "../src/Pages/ForumPage/ForumPage";

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
