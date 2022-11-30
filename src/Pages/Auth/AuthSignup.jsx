import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import app from "../../config/firebase";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createGlobalState } from 'react-hooks-global-state';
import "./Auth.css";
import Logo from "../../img/RPC_final.png";
import LogIn from "../Auth/LogIn";
import Register from "./Register";
import Signup from "../Auth/AuthSignup";
import Login from "../Auth/AuthLogin";

const AuthSignUp = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Rakit PC</h1>
          <h6>Rakit PC anda disini</h6>
        </div>
      </div>

      <SignUp/>

    </div>
  );
};




// class LogIn extends React.Component {
//   state = {
//     email:'',
//     password:''
//   }
//   handleChangeField = (e) =>{
//     this.setState({[e.target.name]: e.target.value})
//   }
//   handleSubmit = (e) =>{
//     e.preventDefault();
//     const {email, password} = this.state
//     console.log('data before send: ', email, password)
//     app.createUserWithEmailAndPassword(email, password)
//     .then(res=>{
//       app.currentUser.sendEmailVerification()
//       .then(()=>{
//         alert('Mohon verfikasi email anda');
//         this.props.history.push('/AuthLogin');
//       })
//       .catch((error)=>{
//         alert(error.message)
//       })
//     })
//     .catch(err=>{
//       alert(err.message)
//     })
//   }
  
//   render () {
//     const {email, password} = this.state
//     return (
//       <div className="a-right">
//         <form className="infoForm authForm">
//           <h3>Log In</h3>
  
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="infoInput"
//               value={email}
//               onChange={this.handleChangeField}
//               name="email"
          
//             />
//           </div>
  
//           <div>
//             <input
//               type="password"
//               className="infoInput"
//               placeholder="Password"
//               value={password}
//               onChange={this.handleChangeField}
//               name="password"
//             />
//           </div>
  
//           <div>
//               <span style={{ fontSize: "12px" }}>
//                 Don't have an account Sign up
//               </span>
//             <button className="button infoButton">Login</button>
//           </div>
//         </form>
//       </div>
//     );
//     }
//   }
// class SignUp extends Component
class SignUp extends Component {
  state = {
    email:'',
    password:''
  }
  handleChangeText = (e) =>{
    this.setState({
      [e.target.id]: e.target.value})
  }
  handleRegisterSubmit = () =>{
    const {email, password} = this.state;
    const auth = getAuth();

    console.log('data before send: ', email, password)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .then(res=>{
      console.log('success: ', res)
      this.props.history.push('/AuthLogin');
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.Message;
      console.log(errorCode, errorMessage)
    })
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        const { useGlobalState } = createGlobalState({ ui: uid });
      } else {
        // User is signed out
        // ...
      }
    });
  }
  render () {
    const {email, password} = this.state
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        {/* <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div> */}

        <div>
          <input
            type="email"
            className="infoInput"
            id="email"
            value={email}
            onChange={this.handleChangeText}
            name="email"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            id="password"
            value={password}
            onChange={this.handleChangeText}
            name="password"
            placeholder="Password"
          />
          {/* <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          /> */}
        </div>

        <div>
            <span style={{fontSize: '12px'}}>Already have an account. <Link to={'/forum/Login'}>Login!</Link></span>
        </div>
        
        {/* <Link to={'/Login'}> */}
          <button className="button infoButton" onClick={this.handleRegisterSubmit} type="submit">Signup</button>
        {/* </Link> */}
      </form>
    </div>
  );
  }
}

export default AuthSignUp;
