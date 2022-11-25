import React from "react";
import "./Auth.css";
import Logo from "../../img/RPC_final.png";
import LogIn from "../Auth/LogIn";
import AuthLogin from "../Auth/AuthLogin";
import AuthSignup from "../Auth/AuthSignup";
import Register from "./Register";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Rakit PC</h1>
          <h6>Rakit PC anda disini</h6>
        </div>
      </div>

      {/* <Register/> */}
      {/* <LogIn/> */}
      <AuthLogin/>
      <AuthSignup/>

    </div>
  );
};

export default Auth;
