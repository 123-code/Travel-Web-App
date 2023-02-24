import React from 'react';
import '../Styling/Destinos.css'

const Destinos = ({ imageSrc, text , title}) => {
  return (
    <div className="destinos-wrapper">
      <h2 className='titleDestinos' style={{ flex: 1 }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img  className='imgDestinos' src={imageSrc} alt="Imagen del componente" style={{ marginRight: '20px', maxWidth: '50%' }} />
        <p style={{ flex: 1 }}>{text}</p>
      </div>
    </div>
  );
};

export default Destinos;
