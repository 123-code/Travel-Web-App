import React from 'react';
import '../Styling/BackgroundImageOverlay.css';

function BackgroundImageOverlay(props) {
    return (
      <div
        className="background-image-overlay"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        <div className="overlay">
          <div className="overlay-content">
            <h1>La aventura está a un solo click</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default BackgroundImageOverlay;
