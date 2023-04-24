import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Destinos.css';

const Destinos = ({ imageSrc, text, title, button = false, link }) => {
  const navigation = useNavigate();
  return (
    <div
      className="destinos-wrapper "
      style={{
        marginTop: '10px',
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '100%',
    
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      />
      <div
        style={{
          color: 'white',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          marginTop: '50px'
        }}
      >
        <h2 className="titleDestinos" style={{ fontSize: 50 }}>
          {title}
        </h2>
        <div
          classname="containerP"
          style={{
            maxWidth: '80%',
            textAlign: 'justify',
            margin: '20px',
            marginBottom: '100px'
          }}
        >
          <p style={{ fontSize: 18 , width: '100%' }}>{text}</p>
        </div>
        {button ? (
          <button
            className="destinos-button"
            onClick={() => {
              navigation(link);
            }}
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Leer más
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Destinos;


export function DestinosHeader({ imageSrc, text, title, button = false, link }){
  const navigation = useNavigate();
  return (
    <div
      className="destinos-wrapper "
      style={{
        marginTop: '10px',
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '100%',
    
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      />
      <div
        style={{
          color: 'white',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          marginTop: '50px'
        }}
      >
        <h2 className="titleDestinos" style={{ fontSize: 50 }}>
          {title}
        </h2>
        <div
          classname="containerP"
          style={{
            maxWidth: '80%',
            textAlign: 'justify',
            margin: '20px',
            marginBottom: '100px'
          }}
        >
          <p style={{ fontSize: 18 , width: '100%' }}>{text}</p>
        </div>
        {button ? (
          <button
            className="destinos-button"
            onClick={() => {
              navigation(link);
            }}
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Leer más
          </button>
        ) : null}
      </div>
    </div>
  );
}
