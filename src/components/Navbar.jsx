import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './images/bakers-inn-category 1.png';
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'><img className='logo' src={logo} alt='Our Logo' /></Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/kids-corner">Kid's Corner</Link></li>
        <div className="navbar-contact">
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </div>
      </ul>
    </nav>
  );
};
