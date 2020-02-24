import React, {useState} from "react";
// import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
 
  const onLogin = e => {
        axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload);
      })
      

      .catch(err => console.log(err));
      props.history.push('/bubblepage');
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={e => onLogin(e)}>
        <input type="text" label="text"
        name="username" placeholder="Username"
        value={credentials.username}
        onChange={handleChange} />
        <input type="password"  label="password"
        name="password" placeholder="Password" 
        value={credentials.password}
        onChange={handleChange}/>
        <button type="submit">Login</button>
      </form>
      
    </>
  );
};

export default Login;
