import React, { useState } from "react";
import "../Styling/FloatingButton.css";
import FloatingCard from "./FloatingCard";
import Form from "./Form";

function FloatingButton() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleCardClose = () => {
    setIsCardOpen(false);
  };

  const handleButtonClick = () => {
    setIsCardOpen(true);
  };

  return (
    <div className="floating-button-container">
      {!isCardOpen && (
        <div className="floating-button" onClick={handleButtonClick}>
          <i className="fas fa-plus"></i>
        </div>
      )}
      {isCardOpen && (
        <FloatingCard onClose={handleCardClose}>
          <h2 className="card-title">Contacto</h2>
          <Form />
        </FloatingCard>
      )}
    </div>
  );
}

export default FloatingButton;
