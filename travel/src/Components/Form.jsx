import React, { useState } from "react";
import "../App.css";
import "../Styling/Form.css";
import axios from "axios";

// create form component
const Form = ({ color }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const handleSubmit = () => {
    axios
      .post("https://123-code-bug-free-doodle-rpjvpg7rwvg25vq6-5000.preview.app.github.dev/api/sendform", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <div className="container">
        <div className="card" style={{ backgroundColor: "transparent" }}>
          <div className="inputBox1" style={{ borderColor: color }}>
            <input
              type="text"
              required
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                color: color,
                backgroundColor: color,
                borderColor: color,
              }}
            />
            <span className="user" style={{ color: color }}>
              Nombre
            </span>
          </div>

          <div className="inputBox1" style={{ borderColor: color }}>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                color: color,
                backgroundColor: color,
                borderColor: color,
              }}
            />
            <span className="user" style={{ color: color }}>
              Email
            </span>
          </div>

          <div className="inputBox" style={{ borderColor: color }}>
            <input
              type="text"
              required
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{
                color: color,
                backgroundColor: color,
                borderColor: color,
              }}
            />
            <span style={{ color: color }}>País</span>
          </div>

          <div className="inputBox" style={{ borderColor: color }}>
            <input
              type="text"
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                color: color,
                backgroundColor: color,
                borderColor: color,
              }}
            />
            <span style={{ color: color }}>Mensaje</span>
          </div>

          <button
            className="enter"
            type="button"
            onClick={handleSubmit}
            style={{ backgroundColor: color, color: "white" }}
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
