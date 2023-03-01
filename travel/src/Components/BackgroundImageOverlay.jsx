import React from 'react';
import '../Styling/BackgroundImageOverlay.css';
import Form from './Form';

function BackgroundImageOverlay(props) {
  return (
    <div
      className="background-image-overlay"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className="overlay">
        <div className="overlay-content">
          <div className="title-container">
            <h1 style={{color: 'white'}}>La aventura está a un solo click</h1>
          </div>
          <div className="form-container">
          <Form color="white" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImageOverlay;
