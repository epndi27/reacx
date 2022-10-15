import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import "./Auth.css";

const LogIn = () => {

    const history = useHistory();
    
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success",res.data.message,"success");
                    if(res.data.role === 'admin')
                    {
                        history.push('/admin/dashboard');
                    }
                    else
                    {
                        history.push('/');
                    }
                }
                else if(res.data.status === 401)
                {
                    swal("Warning",res.data.message,"warning");
                }
                else
                {
                    setLogin({...loginInput, error_list: res.data.validation_errors });
                }
            });
        });

    }

    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={handleInput} 
              value={loginInput.email}
              className="infoInput"
              name="email"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              onChange={handleInput} 
              value={loginInput.password}
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button onSubmit={loginSubmit} className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }
  export default LogIn