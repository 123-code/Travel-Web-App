import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyapi = async()=>{
    
  }


  const handleSubmit = () => {
    const saltrounds = 10;
    const encpassword = password;

    bcrypt.hash(encpassword,saltrounds,()=>{
      if(err){
        console.error(err)
      }
      else{
        // cambiar el URL
        axios.post('/api/login', {
          username: username,
          password: encpassword
        })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
      }
    })
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;