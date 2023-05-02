import React from 'react';
import '../Styling/TopDestinations.css';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

const TopDestinations = () => {
  const navigate = useNavigate();
  return (
    <div className="containerCards">
      <h1 className='h1TD' style={{ marginTop: '20px' , color: 'black'}}>Our Destinations</h1>

      <div className='containerC'>
      <div className="cardTD  containerCards">
      <h2>Galapagos</h2>
        <img src="https://media.istockphoto.com/id/674781548/es/foto/le%C3%B3n-marino-de-gal%C3%A1pagos-en-la-isla-de-playa-de-espanola.jpg?b=1&s=170667a&w=0&k=20&c=kGRQfcAsWk54wNck2Sun43UPt1QlOZZU4VlmLDNzn2I=" alt="Galapagos"  className="destimg" />
        
        <button className='btnTD' onClick={()=>{navigate("/galapagos")}}>Learn more</button>
      </div>
      <div className="cardTD containerCards" >
      <h2>Ecuador</h2>
        <img src="https://www.tripsandtours.tur.ar/uploads/1/0/9/1/10910083/cuenca-3_1_orig.jpg" alt="Ecuador" className="destimg" />
       
        <button className='btnTD' onClick={()=>{navigate("/amazon")}}>Learn more</button>
      </div>
      
     
  
      </div>
      </div>
  );
};

export default TopDestinations;