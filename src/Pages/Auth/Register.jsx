import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import "./Auth.css";

const Register = () => {
    const history = useHistory();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`http://127.0.0.1:8000/api/register`, data).then(res => { 
                if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success",res.data.message,"success");
                    history.push('/');
                }
                else
                {
                    setRegister({...registerInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={registerSubmit}>
          <h3>Sign up</h3>
  
          <div>
            <input
              type="text"
              placeholder="Name"
              onChange={handleInput} 
              value={registerInput.name}
              className="infoInput"
              name="name"
            />
            <span>{registerInput.error_list.name}</span>
          </div>
  
          <div>
            <input
              type="text"
              className="infoInput"
              onChange={handleInput} 
              value={registerInput.email}
              name="email"
              placeholder="Email"
            />
            <span>{registerInput.error_list.email}</span>
          </div>
  
          <div>
            <input
              type="text"
              className="infoInput"
              onChange={handleInput} 
              value={registerInput.password}
              name="password"
              placeholder="Password"
            />
            <span>{registerInput.error_list.password}</span>
          </div>
  
          <div>
              <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
              <button className="button infoButton" type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }

  export default Register