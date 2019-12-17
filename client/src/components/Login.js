import React, {useState} from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
 const [credentials, setCredentials] = useState({
   username: '',
   password: ''
 });

 const login = e => {
   e.preventDefault();
   axiosWithAuth().post(`/api/login`,  
                        credentials)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubblepage');
    })
    .catch(err => console.log(err));
 };

 const handleChange = e => {
   setCredentials({
     ...credentials,
     [e.target.name]: e.target.value
   });
  };

 return (
   <div>
     <h1>Welcome to the Bubble App!</h1>
     <form onSubmit={login}>
       <input type="text"
              label="text" 
              name="username" 
              placeholder="Username"
              value={credentials.username}
              onChange={handleChange} 
        />
        <input type="password"
              label="password"
              name="password"
              placeholder="password"
              value={credentials.password}
              onChange={handleChange}
        />
        <button>Log in</button>
     </form>
   </div>
 )
}

export default Login;
