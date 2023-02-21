import React, { useState } from "react";
import "../App.css";
import '../Styling/Form.css';
import axios from 'axios';
// create form component
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "", 
        message: ""
      });
      
const handlesubmit = ()=>{
  axios.post('https://123-code-bug-free-doodle-rpjvpg7rwvg25vq6-5000.preview.app.github.dev/api/sendform', formData)
  .then((response)=>{
console.log(response)
  }).catch((error)=>{
    console.error(error)
  })
} 

const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
// onSubmit={handlesubmit}
return(
    <> 
<form>
<div className="container">
<div className="card">
<a className="singup">Si requieres mayor información, llena el siguiente formulario</a>
        <div className="inputBox1">
          <input type="text" required 
        
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}/>
          <span className="user">Nombre</span>
        </div>

        <div className="inputBox1">
          <input type="email" required 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}/>
          <span className="user">Email</span>
        </div>

        <div className="inputBox">
          <input type="text" required 
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}/>
          <span>País</span>
        </div>

        <div className="inputBox">
          <input type="text" required 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}/>
          <span>Mensaje</span>
        </div>

        <button className="enter" type="submit" onClick={handlesubmit}>Enviar</button>
        </div>
        </div>
</form>

    </>
)


}
 export default Form;