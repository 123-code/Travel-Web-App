import React from 'react';
import { Link } from 'react-router-dom';
/*
 <Route exact path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/peru" element={<PeruPage/>} />
        <Route path="/galapagos" element={<GalapagosPage/>} />
        <Route path="/highlands" element={<HighlandsPage/>} />
        <Route path="/amazon" element={<AmazonPage/>} />
        <Route path="/coast" element={<CoastPage/>} />
*/

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      backgroundColor: '#ADD8E6', 
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      zIndex: '1' 
    }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
      <h1 style={{ marginRight: '20px' }}> MABVBACA </h1>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: 'white' }}>INICIO</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/about" style={{ color: 'white' }}>NOSOTROS</Link>
        </li>
       
        <li style={{ marginRight: '20px' }}>
          <Link to="/galapagos " style={{ color: 'white' }}>GALAPAGOS</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/ecuador" style={{ color: 'white' }}>ECUADOR</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/peru" style={{ color: 'white' }}>PERU</Link>
        </li>
        <li>
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
/*
 <li style={{ marginRight: '20px' }}>
          <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/coast" style={{ color: 'white' }}>Coast</Link>
        </li>
*/