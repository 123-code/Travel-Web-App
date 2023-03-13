import React from 'react';
import '../Styling/TopDestinations.css';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

const TopDestinations = () => {
  const navigate = useNavigate();
  return (
    <div className="containerCards">
      <h1 className='h1TD' style={{ marginTop: '20px' , color: 'black'}}>Top Destinations</h1>

      <div className='containerC'>
      <div className="cardTD">
      <h2>Galapagos</h2>
        <img src="https://media.istockphoto.com/id/674781548/es/foto/le%C3%B3n-marino-de-gal%C3%A1pagos-en-la-isla-de-playa-de-espanola.jpg?b=1&s=170667a&w=0&k=20&c=kGRQfcAsWk54wNck2Sun43UPt1QlOZZU4VlmLDNzn2I=" alt="Galapagos" style={{ width: '100%' }} />
        
        <button className='btnTD' onClick={()=>{navigate("/galapagos")}}>Quiero saber más</button>
      </div>
      <div className="cardTD">
      <h2>Ecuador</h2>
        <img src="https://www.tripsandtours.tur.ar/uploads/1/0/9/1/10910083/cuenca-3_1_orig.jpg" alt="Ecuador" style={{ width: '100%' }} />
       
        <button className='btnTD' onClick={()=>{navigate("/amazon")}}>Quiero saber más</button>
      </div>
      <div className="cardTD">
      <h2>Quito</h2>
        <img src="https://media.istockphoto.com/id/487614146/es/foto/erupci%C3%B3n-del-volc%C3%A1n-cotopaxi.jpg?b=1&s=170667a&w=0&k=20&c=yjWT_6K6aEO28JOS38aO2RvL65yTbTh0QUFxMHZz9-I=" alt="Quito" style={{ width: '100%' }} />
        
        <button className='btnTD' onClick={()=>{navigate("/amazon")}}>Quiero saber más</button>
      </div>
      <div className="cardTD">
      <h2>Perú</h2>
        <img src="https://media.istockphoto.com/id/479900992/es/foto/lama-y-machu-picchu.jpg?b=1&s=170667a&w=0&k=20&c=77qI_fVoIh4hBSSOsb27ITPNJwWBPx9zFcXy1rTD0PQ=" alt="Perú" style={{ width: '100%' }} />
        
        <button className="btnTD" onClick={()=>{navigate("/peru")}}>Quiero saber más</button>
      </div>
  
      </div>
      </div>
  );
};

export default TopDestinations;
