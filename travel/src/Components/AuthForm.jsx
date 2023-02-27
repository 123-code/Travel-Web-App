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
    const saltRounds = 10;

    // Hashing the password
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) {
          console.error(err);
        } else {
          // Sending the username and hash to the server
          axios.post("https://123-code-bug-free-doodle-rpjvpg7rwvg25vq6-5000.preview.app.github.dev/api/sendform", {
            username: username,
            password: hash
          }).then((response) => {
            console.log(response);
          }).catch((err) => {
            console.error(err);
          });
        }
      });
    }); 
  }
  return (
    <div>
      <h2>Login</h2>
      <form>
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
        <button onClick={handleSubmit} type="submit">Ingresar</button>
      </form>
    </div>
  );
}
export default Login;