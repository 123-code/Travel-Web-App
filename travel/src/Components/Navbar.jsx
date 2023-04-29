import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConnectButton from "./ConnectWalletButton";
import { useNavigate } from "react-router-dom";
import "../Styling/Navbar.css";
import Button from "@mui/material/Button";
import photo from "./PHOTO-2023-04-27-14-08-53.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        padding: "1vw",
      }}
    >
      <div
        className="navIcon"
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", alignItems: "center" }}
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}>
          <GiHamburgerMenu />
        </i>
      </div>
      <div>
      <img
            src={photo}
            style={{ width: "10%", height: "10%" }}
            alt="logo"
          />
      </div>
      
      <div
        className="navbar__left"
        style={{ display: isOpen ? "flex" : "none", alignItems: "center" }}
      >
        <h3 style={{ marginLeft: "20px" }}>
         
        </h3>
        <ul
          style={{ display: "flex", listStyle: "none", marginLeft: "20px" }}
        >
          <li style={{ marginRight: "20px" }}>
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: "20px" }}>
            <Link to="/about" style={{ color: "black" }}>
              About us{" "}
            </Link>
          </li>
          <li
            style={{ marginRight: "20px" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/galapagos" style={{ color: "black" }}>
              Galápagos
            </Link>
            {dropdown && (
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
        <Button variant="contained" size="large" onClick={()=>{navigate("/form")}} style={{backgroundColor: "#03244D"}}>
  Contact
</Button>

        </li>
        <div>
 
        </div>
        
      </ul>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .navMenu {
            display: flex !important;
          }
          .navIcon {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .navbar__left h3 {
            margin: 0;
            width: 50%;
          }
       
        }
      `}</style>
    </nav>
  );
};

export default Navbar