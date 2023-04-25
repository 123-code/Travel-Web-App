import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {SiEthereum} from 'react-icons/si';
import { BsPhone } from 'react-icons/bs';
import '../Styling/Footer.css'
import logo from '../Imgs/logoRB.png'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="footer__container" >
        <div className="footer__column">
          <h4>Destintions</h4>
          <ul>
            <li><a style={{color:'#fff'}} href="#">Otavalo</a></li>
            <li><a style={{color:'#fff'}} href="#">Papallacta</a></li>
            <li><a style={{color:'#fff'}} href="#">Mindo</a></li>
            <li><a style={{color:'#fff'}} href="#">Cuyabeno</a></li>
            <li><a style={{color:'#fff'}} href="#">Cotopaxi</a></li>
            <li><a style={{color:'#fff'}} href="#">Quilotoa</a></li>
            <li><a style={{color:'#fff'}} href="#">Perú</a></li>
            <li><a style={{color:'#fff'}} href="#">Galápagos</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Social Media</h4>
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook"></i> <BsFacebook/> </a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a><FaTwitter/></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a><FaInstagram/></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a><SiEthereum/></li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Contáctanos</h4>
          <ul>
          <li><BsPhone/><a style={{color:'#fff'}} href="#">contact:+593 0980389837</a></li>
          <li> Address: Republica Del Salvador y Suiza</li>
          </ul>
        </div>
      </div>


      
      <div className="footer__bottom" >
        <p>© ReactBuilders 2023</p>
        <img src={logo} alt="ReactBuilders" />

      </div>
    </footer>
  );
};

export default Footer;


