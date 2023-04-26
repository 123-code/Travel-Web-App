import React from 'react';
import '../Styling/MainImage.css';
import foto from './imagenprincipal.jpeg';

const MainImage = () => {
  return (
    <div className="main-image">
      <div className="overlay"></div>
      <img src={(foto)}alt="Image" />

    </div>
  );
};

export default MainImage;
