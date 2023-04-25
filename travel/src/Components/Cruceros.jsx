import React from 'react';
import '../Styling/Cruceros.css';
import {useNavigate} from "react-router-dom";
import treasure from '../Imgs/Treasure.png';
import solaris from '../Imgs/Solaris.png';
import archipel from '../Imgs/Archipel.png';
import aqua from '../Imgs/Aqua.png';
import { Link } from 'react-router-dom';

const Cruceros = () => {
  const navigate = useNavigate();
  return (
    <div className="containerCards">
      <h1 className='h1TD' style={{ marginTop: '20px' , color: 'black'}}>Our Cruises</h1>

      <div className='containerC'>
      <div className="cardC">
      <h2>Treasure</h2>
        <img src={treasure} alt="Treasure" style={{ width: '100%' }} />
        
        <button className='btnTD' onClick={()=>{navigate("/high")}}>Read more</button>
      </div>
      <div className="cardC">
      <h2>Solaris</h2>
        <img src={solaris} alt="Solaris" style={{ width: '100%' }} />
       
        <button className='btnTD' onClick={()=>{navigate("/standard")}}>Read more</button>
      </div>
      
      <div className="cardC">
      <h2>Archipel I</h2>
        <img src={archipel} alt="Archipel I" style={{ width: '100%' }} />
        
        <button className="btnTD" onClick={()=>{navigate("/promotional")}}>Read more</button>
      </div>

      <div className="cardC">
      <h2>Aqua</h2>
        <img src={aqua} alt="Aqua" style={{ width: '100%' }} />
        
        <button className="btnTD" onClick={()=>{navigate("/aqua")}}>Read more</button>
      </div>
  
      </div>
      </div>
  );
};

export default Cruceros;
