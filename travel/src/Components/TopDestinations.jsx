import React from 'react';
import { useNavigate } from "react-router-dom";

const TopDestinations = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '20px'
  };

  const h1Style = {
    marginTop: '20px',
    color: 'black',
    fontSize: '24px'
  };

  const containerCStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const cardTDStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    width: '300px',
    borderRadius: '10px'
  };

  const destImgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px'
  };

  const btnTDStyle = {
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const btnTDHoverStyle = {
    backgroundColor: '#33cc11'
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Our Destinations</h1>

      <div style={containerCStyle}>
        <div style={cardTDStyle}>
          <h2>Galapagos</h2>
          <img
            src="https://media.istockphoto.com/id/674781548/es/foto/le%C3%B3n-marino-de-gal%C3%A1pagos-en-la-isla-de-playa-de-espanola.jpg?b=1&s=170667a&w=0&k=20&c=kGRQfcAsWk54wNck2Sun43UPt1QlOZZU4VlmLDNzn2I="
            alt="Galapagos"
            style={destImgStyle}
          />
          <button
            style={btnTDStyle}
            onClick={() => { navigate("/galapagos") }}
          >
            Learn more
          </button>
        </div>
        <div style={cardTDStyle}>
          <h2>Ecuador</h2>
          <img
            src="https://www.tripsandtours.tur.ar/uploads/1/0/9/1/10910083/cuenca-3_1_orig.jpg"
            alt="Ecuador"
            style={destImgStyle}
          />
          <button
            style={btnTDStyle}
            onClick={() => { navigate("/amazon") }}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
