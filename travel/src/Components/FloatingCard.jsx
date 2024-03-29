import React, { useState } from 'react';
import '../Styling/FloatingButton.css';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import Form from './Form';

function FloatingButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`floating-button ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded ? (
          <div className="cardFlotante" id="cardFlotante">
            <div className="card-header">
              <h2 className='h2FC'>Contact Us</h2>
              <button className="close-button" onClick={handleToggle}>
                <FaTimes />
              </button>
            </div>
            <div className="card-body">
              <Form className="formFC" />
            </div>
          </div>
        ) : (
          <button className="open-button" onClick={handleToggle}>
            <FaPlus />
          </button>
        )}
      </div>
    </>
  );
}

export default FloatingButton;
