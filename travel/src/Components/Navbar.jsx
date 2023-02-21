import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      backgroundColor: 'white', 
      color: 'black',
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      zIndex: '1' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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

      <ul style={{ display: 'flex', listStyle: 'none', marginRight: '20px' }}>
        <li style={{ marginRight: '20px' }}>
          <button> Log In </button>
        </li>

        <li>
          <button> Register </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
