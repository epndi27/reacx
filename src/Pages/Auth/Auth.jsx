import React from "react";
import "./Auth.css";
import Logo from "../../img/RPC_final.png";
import LogIn from "../Auth/LogIn";
import Register from "./Register";
import Signup from "../Auth/AuthSignup";
import Login from "../Auth/AuthLogin";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1 style={{}} >Rakit PC</h1>
          <h6>Rakit PC anda disini</h6>
        </div>
      </div>

      <Login/>

    </div>
  );
};

export default Auth;
