import React, { useState } from "react";

import { Link } from "react-router-dom";
import ConnectButton from "./ConnectWalletButton";
import { useNavigate } from "react-router-dom";
import "../Styling/Navbar.css";
import Button from "@mui/material/Button";
import photo from "./LogoSA.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "@mui/material";


const Navbar = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:700px)");

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        color: "black",
        position: "fixed",
        top: "0",
        width: "100%",
        height: "auto",
        zIndex: "1",
        fontSize: "1.5vw",
        padding: "0.2vw",
      }}
    >
      <div
        className="navIcon"
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", alignItems: "left " }}
      >
        <img
  src={photo}
  className="navbar-logo"
  alt="logo"
  style={{ borderRadius: '10%' }}
/>
      </div>

      <div>
      
  
      </div>
      
      <div
        className="navbar__left"
        
      >
        <h3 style={{ marginLeft: "20px" }}>
         
        </h3>
        <ul
            className="navbar-list" 
        >
          <li style={{ marginRight: "20px",marginLeft:"10px" }}>
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/about" style={{ color: "black" }}>
              About{" "}
            </Link>
          </li>
          <li
            style={{ marginRight: "20px" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/galapagos" style={{ color: "black"}}>
              Galápagos
            </Link>
            {dropdown && !isSmallScreen && (
  <ul className="dropdown">
    <li>
      <Link to="/high">Treasure</Link>
    </li>
    <li>
      <Link to="/standard">Solaris</Link>
    </li>
    <li>
      <Link to="/promotional">Archipel I</Link>
    </li>
    <li>
      <Link to="/aqua">Aqua</Link>
    </li>
  </ul>
)}
          </li>
          <li
            style={{ marginRight: "20px" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/amazon" style={{ color: "black" }}>
              Ecuador
            </Link>
          </li>
         
     
          <li style={{ marginRight: '20px' }}>
      
          </li>
        </ul>
      </div>
      <div className="navbar__right">
      <ul style={{ display: 'flex', listStyle: 'none', marginRight: '20px' }}>
 

        <li>
        <Button
  variant="contained"
  size="large"
  onClick={() => {
    navigate("/form");
  }}
  style={{ backgroundColor: "#03244D", display: "block" }}
  className="contact-button"
>
  Contact
</Button>

        </li>
        <div>
 
        </div>
        
      </ul>
      </div>
    </nav>
  );
};

export default Navbar