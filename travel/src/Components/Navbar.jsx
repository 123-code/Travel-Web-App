import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ConnectButton from "./ConnectWalletButton";
import { useNavigate } from "react-router-dom";
import '../Styling/Navbar.css'
import Button from '@mui/material/Button';

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
        <h3 style={{ marginLeft: '20px' }}>MA Expeditions</h3>
        <ul style={{ display: 'flex', listStyle: 'none', marginLeft: '20px' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/" style={{ color: 'black' }}>Home</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/about" style={{ color: 'black' }}>About us </Link>
          </li>
          <li style={{ marginRight: '20px' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/galapagos" style={{ color: 'black' }}>Galápagos</Link>
          {dropdown && (
            <ul className="dropdown">
              <li><Link to="/high">Treasure</Link></li>
              <li><Link to="/standard">Solaris</Link></li>
              <li><Link to="/promotional">Archipel I</Link></li>
              <li><Link to="/aqua">Aqua</Link></li>
            </ul>
          )}
        </li>
        <li style={{ marginRight: '20px' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/amazon" style={{ color: 'black' }}>Ecuador</Link>
          
        </li>
     
          <li style={{ marginRight: '20px' }}>
      
          </li>
        </ul>
      </div>
      <div className="navbar__right">
      <ul style={{ display: 'flex', listStyle: 'none', marginRight: '20px' }}>
 

        <li>
        <Button variant="contained" size="large" onClick={()=>{navigate("/form")}} style={{backgroundColor: "#03244D"}}>
  Contact
</Button>

        </li>
        <div>
 
        </div>
        
      </ul>
      </div>
    </nav>
  );
};

export default Navbar