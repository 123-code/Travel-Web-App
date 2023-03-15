import React from 'react';
import '../Styling/Footer.css'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="footer__container" >
        <div className="footer__column">
          <h4>Destinos</h4>
          <ul>
            <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
            <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
            <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
            <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
            <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Tours</h4>
          <ul>
          <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
          <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
          <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
          <li><a style={{color:'#fff'}} href="#">Destino 1</a></li>
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
          <li><a style={{color:'#fff'}} href="#">Cel:0982379716</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom" >
        <p>© ReactBuilders 2023</p>
        <img src="logo.png" alt="ReactBuilders" />
      </div>
    </footer>
  );
};

export default Footer;


