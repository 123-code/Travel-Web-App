import React, { useState } from "react";
import "../App.css";
import './Form.css';
import axios from 'axios';
// create form component
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "", 
        nationality: ""
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
<div>
<label  className="textstyle" htmlFor="name">Name</label>
<input className="inputfields"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
/>
</div>

<div>
<label className="textstyle" htmlFor="email">Email</label>
          <input
          className="inputfields"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}/>
</div>

<div>
        <label className="textstyle" htmlFor="age">Age:</label>
        <input
        className="inputfields"
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="textstyle" htmlFor="nationality">Nationality:</label>
        <input
         className="inputfields"
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        />
      </div>
      <button className = "submitbtn" type="submit" onClick={handlesubmit}>Submit</button>
</form>
    </>
)


}
 export default Form;
