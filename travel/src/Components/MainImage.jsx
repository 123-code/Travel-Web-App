import React from 'react';
import './MainImage.css';
import img from './imagenprincipal.jpeg';

const MainImage = () => {
  return (
    <div className="main-image">
      <div className="overlay"></div>
      <img src={(img)}alt="Image" />

    </div>
  );
};

export default MainImage;
