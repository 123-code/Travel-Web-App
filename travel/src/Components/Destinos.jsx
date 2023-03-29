import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../Styling/Destinos.css'

const Destinos = ({ imageSrc, text , title,button=false,link}) => {
  const navigation =  useNavigate();
  return (
    <div className="destinos-wrapper">
      <h2 className='titleDestinos' style={{ flex: 1,fontFamily: 'Times New Roman' }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img  className='imgDestinos' src={imageSrc} alt="Imagen del componente" style={{ marginRight: '20px', maxWidth: '50%', height: '250px', width: '250px',fontFamily: 'Times New Roman' }} />
        <p style={{ flex: 1, fontFamily: 'Times New Roman',fontSize:25 }}>
          {text}
        </p>
        {button ? <button className="destinos-button" onClick={()=>{navigation(link)}} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}> Read More </button> : null}
      </div>
    </div>
  );
};


export default Destinos;
/*
{button ? (
          <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
            <button>Read More</button>
          </div>
        ) : null}
*/