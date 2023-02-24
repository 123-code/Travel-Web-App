import React from "react";
import "../Styling/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Mi viaje a través de esta agencia fue increíble, los guías fueron muy amables y serviciales en todo momento."
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
    <div className="container">
      <h1 className="title">Estás en buenas manos</h1>
      <h2 className="subtitle">Testimonios</h2>
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
