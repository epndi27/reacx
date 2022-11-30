import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import app from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createGlobalState } from 'react-hooks-global-state';
import "./Auth.css";
import Logo from "../../img/RPC_final.png";
import LogIn from "../Auth/LogIn";
import Register from "./Register";
import Signup from "../Auth/AuthSignup";
import Login from "../Auth/AuthLogin";

const AuthLoginn = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Rakit PC</h1>
          <h6>Rakit PC anda disini</h6>
        </div>
      </div>

      <Loginn/>

    </div>
  );
};



class Loginn extends Component {
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
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .then(res=>{
      console.log('success: ', res)
      this.props.history.push('/ForumPage');
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
          <h3>Log In</h3>
  
          <div>
            <input
              type="email"
              placeholder="Email"
              className="infoInput"
              id="email"
              value={email}
              onChange={this.handleChangeText}
              name="email"
          
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              id="password"
              value={password}
              onChange={this.handleChangeText}
              name="password"
              placeholder="Password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account <Link to={'/forum/Signup'}>Sign Up</Link>
              </span>
            <Link to={'/ForumPage'}>
            <button className="button infoButton" onClick={this.handleRegisterSubmit}>Login</button>
            </Link>
          </div>
        </form>
      </div>
    );
    }
  }
// class SignUp extends Component {
//   state = {
//     email:'',
//     password:''
//   }
//   handleChangeText = (e) =>{
//     this.setState({
//       [e.target.id]: e.target.value})
//   }
//   handleRegisterSubmit = () =>{
//     const {email, password} = this.state;
//     const auth = getAuth();

//     console.log('data before send: ', email, password)
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .then(res=>{
//       console.log('success: ', res)
//       this.props.history.push('/AuthLogin');
//     })
//     .catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.Message;
//       console.log(errorCode, errorMessage)
//     })
//   }
//   render () {
//     const {email, password} = this.state
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign up</h3>

//         {/* <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div> */}

//         <div>
//           <input
//             type="email"
//             className="infoInput"
//             id="email"
//             value={email}
//             onChange={this.handleChangeText}
//             name="email"
//             placeholder="Email"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             id="password"
//             value={password}
//             onChange={this.handleChangeText}
//             name="password"
//             placeholder="Password"
//           />
//           {/* <input
//             type="text"
//             className="infoInput"
//             name="confirmpass"
//             placeholder="Confirm Password"
//           /> */}
//         </div>

//         <div>
//             <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
//         </div>
//         <button className="button infoButton" onClick={this.handleRegisterSubmit} type="submit">Signup</button>
//       </form>
//     </div>
//   );
//   }
// }

export default AuthLoginn;
