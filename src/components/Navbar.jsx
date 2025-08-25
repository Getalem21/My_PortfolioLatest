import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbarAll">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logoImage" />
          <h1 className="logotitle-h1">My Portfolio</h1>
        </div>

        {/* Desktop links */}
        <ul className="navlinks desktop-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
        </ul>

        {/* Hamburger menu (mobile) */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Mobile links */}
          <ul className={`navlinks mobile-menu ${isOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/Gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
