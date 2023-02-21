import React from "react";
import '../Styling/Form.css'
export default function SignUpForm() {
  return (
    <div className="container">
      <div className="card">
        <a className="singup">Si requieres mayor información, llena el siguiente formulario</a>
        <div className="inputBox1">
          <input type="text" required />
          <span className="user">Nombre</span>
        </div>

        <div className="inputBox1">
          <input type="email" required />
          <span className="user">Email</span>
        </div>

        <div className="inputBox">
          <input type="text" required />
          <span>País</span>
        </div>

        <div className="inputBox">
          <input type="text" required />
          <span>Mensaje</span>
        </div>

        <button className="enter">Enviar</button>
      </div>
    </div>
  );
}
