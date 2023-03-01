import React from 'react';
import Form from './Form';
import '../Styling/SplitPage.css'

const SplitPage = () => {
  return (
    <div className='wrapperAbout' style={{ display: 'flex', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <div className='cont' style={{ flex: 1.5}}>
        <h1 className='h1S' style={{ margin: '2rem 1rem', textAlign: 'justify' }}>Nosotros</h1>
        <img src='https://i.ibb.co/DrSJWVr/thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1.png' alt="Imagen" style={{ width: '100%', height: 'auto' ,  margin: '2rem 1rem',}} />
        <p style={{ margin: '2rem 1rem', textAlign: 'justify' }}>
        Mabvaca Expeditions es una compañía dedicada a crear experiencias en cada destino desde el año 2017. Con mas de 6 años de experiencias, hemos creado recuerdos inolvidables para diferentes familias.
        </p>
        <p style={{ margin: '2rem 1rem', textAlign: 'justify' }}>
        Nuestra visión como empresa es dar una experiencia inolvidable a cada uno de nuestros pasajeros. La amabilidad de nuestra gente y la magia de cada destino. Crearan recuerdos inolvidables que marcaran sus vidas para su siempre.
        </p>
        <p classname='parrafoF' style={{ margin: '2rem 1rem', textAlign: 'justify' }}>
        Actualmente Mabvaca Expeditions cuenta con Adamas House Hotel
Boutique, ubicado en el Centro Hístico de Quito. De igual manera cuenta con convenios con diferentes hoteles y cruceros a lo largo del Ecuador. Cada establecimiento y personal está preparado al más alto nivel para darle una experiencia inolvidable.
        </p>
      </div>
      <div style={{paddingTop: '70px', flex: 1}}>
        <Form/>
      </div>
    </div>
  );
};

export default SplitPage;
