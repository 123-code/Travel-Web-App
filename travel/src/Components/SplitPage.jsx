import React from 'react';
import Form from './Form';
import '../Styling/SplitPage.css'

const SplitPage = () => {
  return (
    <div className='wrapperAbout' style={{ display: 'flex', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <div className='cont' style={{ flex: 1.5}}>
        <h1 className='h1S' style={{ margin: '2rem 1rem', textAlign: 'justify' }}>About us</h1>
        <img className='imgSP' src='https://i.ibb.co/DrSJWVr/thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1.png' alt="Imagen" style={{ width: '100%', height: 'auto' ,  margin: '2rem 1rem',}} />
        <p style={{ margin: '2rem 1rem', textAlign: 'justify' }}>
        Ma Expeditions is a company dedicated to creating experiences in each destination since 2017. With more than 6 years of experiences, we have created unforgettable memories for different families.
        </p>
        <p style={{ margin: '2rem 1rem', textAlign: 'justify' }}>
        Our vision as a company is to give an unforgettable experience to each of our passengers. The friendliness of our people and the magic of each destination. They will create unforgettable memories that will mark their lives forever.
        </p>
        <p classname='parrafoF' style={{ margin: '2rem 1rem', textAlign: 'justify' }}>
        Currently Mabvaca Expeditions has Adamas House Hotel Boutique, located in Quito. It also has agreements with different hotels and cruises throughout Ecuador. Each establishment and staff is prepared at the highest level to give you an unforgettable experience.
        </p>
      </div>
      <div className='colDer' style={{paddingTop: '70px', flex: 1}} >
        <div className='h2SP'>
        <h2 >Contact us through this form:</h2>
        </div>
        <Form/>
      </div>
    </div>
  );
};

export default SplitPage;
