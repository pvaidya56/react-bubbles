import React, {useState} from "react";
// import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

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
      <h1 className="heading">Welcome to the Bubble App!</h1>
      <Form onSubmit={e => onLogin(e)}>
        <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" label="text"
        name="username" placeholder="Enter Username"
        value={credentials.username}
        onChange={handleChange} />
        </Form.Group>
        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" label="password"
        name="password" placeholder="Enter Password"
        value={credentials.password}
        onChange={handleChange} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Login</Button>
      </Form>
      
    </>
  );
};

export default Login;
