import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styling/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', // Agrega alineación vertical al contenedor
      backgroundColor: 'white', 
      color: 'black',
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      height: 'auto', // Ajusta la altura de la navbar
      zIndex: '1',
      fontSize: '1.5vw', // Establece el tamaño de letra en porcentaje
      padding: '1vw' 
    }}>
      <div className="navbar__left" style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={{ marginLeft: '20px' }}>MAExpeditions</h3>
        <ul style={{ display: 'flex', listStyle: 'none', marginLeft: '20px' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/" style={{ color: 'black' }}>INICIO</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/about" style={{ color: 'black' }}>NOSOTROS</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/galapagos " style={{ color: 'black' }}>GALAPAGOS</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/amazon" style={{ color: 'black' }}>ECUADOR</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/peru" style={{ color: 'black' }}>PERU</Link>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
      <ul style={{ display: 'flex', listStyle: 'none', marginRight: '20px' }}>
        <li style={{ marginRight: '20px' }}>
          <button className="loginBtn"> Log In </button>
        </li>

        <li>
          <button className="btnRegistrar" onClick={()=>{navigate("/auth")}}> Register </button>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
