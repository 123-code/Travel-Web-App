import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ConnectButton from "./ConnectWalletButton";
import Select from 'react-select';
import PageDropdown from './NavDropDown';
import '../Styling/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav className="navbar" style={{  
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: 'white', 
      color: 'black',
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      height: 'auto',
      zIndex: '1',
      fontSize: '1.5vw', 
      padding: '1vw' 
    }}>
      <div className="navbar__left" style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={{ marginLeft: '20px' }}>MBVACA Expeditions</h3>
        <ul style={{ display: 'flex', listStyle: 'none', marginLeft: '20px' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/" style={{ color: 'black' }}>Inicio</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/about" style={{ color: 'black' }}>Nosotros</Link>
          </li>
          <li style={{ marginRight: '20px' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/galapagos" style={{ color: 'black' }}>Galápagos</Link>
          {dropdown && (
            <ul className="dropdown">
              <li><Link to="/islas">Islas</Link></li>
              <li><Link to="/fauna">Fauna</Link></li>
              <li><Link to="/flora">Flora</Link></li>
            </ul>
          )}
        </li>
        <li style={{ marginRight: '20px' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/amazon" style={{ color: 'black' }}>Ecuador</Link>
          {dropdown && (
            <ul className="dropdown">
              <li><Link to="/quito">Quito</Link></li>
              <li><Link to="/guayaquil">Guayaquil</Link></li>
              <li><Link to="/cuenca">Cuenca</Link></li>
            </ul>
          )}
        </li>
        <li style={{ marginRight: '20px' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/peru" style={{ color: 'black' }}>Perú</Link>
          {dropdown && (
            <ul className="dropdown">
              <li><Link to="/lima">Lima</Link></li>
              <li><Link to="/cusco">Cusco</Link></li>
              <li><Link to="/arequipa">Arequipa</Link></li>
            </ul>
          )}
        </li>
          <li style={{ marginRight: '20px' }}>
      
          </li>
        </ul>
      </div>
      <div className="navbar__right">
      <ul style={{ display: 'flex', listStyle: 'none', marginRight: '20px' }}>
        <li style={{ marginRight: '20px' }}>
          <button className="loginBtn"> Contactanos </button>
        </li>

     
        <div>
        <li> <ConnectButton/> </li>
        </div>
        
      </ul>
      </div>
    </nav>
  );
};

export default Navbar