import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      backgroundColor: 'orange', 
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      zIndex: '1' 
    }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: 'white' }}>Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/about" style={{ color: 'white' }}>About</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;