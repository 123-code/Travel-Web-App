import React from "react";
import "../Styling/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "My trip was incredible, guides were ."
    },
    {
      id: 2,
      text: "Esta agencia de viajes se aseguró de que todo estuviera en su lugar antes de mi viaje, ¡y fue un éxito!"
    },
    {
      id: 3,
      text: "No podría haber sido más satisfecho con la experiencia que tuve con esta agencia de viajes. ¡Recomendaría a cualquiera!"
    },
  ];

  return (
    <div className="containerTesti">
      <h1 className="title">you're in good hands</h1>
      <h2 className="subtitle">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-text">
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
