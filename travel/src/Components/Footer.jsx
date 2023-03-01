import React from 'react';
import '../Styling/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__column">
          <h4>Destinos</h4>
          <ul>
            <li><a href="#">Destino 1</a></li>
            <li><a href="#">Destino 2</a></li>
            <li><a href="#">Destino 3</a></li>
            <li><a href="#">Destino 4</a></li>
            <li><a href="#">Destino 5</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Tours</h4>
          <ul>
            <li><a href="#">Tour 1</a></li>
            <li><a href="#">Tour 2</a></li>
            <li><a href="#">Tour 3</a></li>
            <li><a href="#">Tour 4</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Nuestras redes</h4>
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Contáctanos</h4>
          <ul>
            <li><a href="#">Teléfono: 123456789</a></li>
            <li><a href="#">Correo electrónico</a></li>
            <li><a href="#">Formulario de contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© ReactBuilders 2023</p>
        <img src="logo.png" alt="ReactBuilders" />
      </div>
    </footer>
  );
};

export default Footer;
