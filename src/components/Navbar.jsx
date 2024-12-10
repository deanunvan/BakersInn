import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from './images/bakers-inn-category 1.png';
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-logo">
        <Link to='/'><img className='logo' src={logo} alt='Our Logo' /></Link>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li style={{"--i": 1}}><Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        <li style={{"--i": 2}}><Link to="/products" onClick={handleLinkClick} className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>
        <li style={{"--i": 3}}><Link to="/recipes" onClick={handleLinkClick} className={location.pathname === '/recipes' ? 'active' : ''}>Recipes</Link></li>
        <li style={{"--i": 4}}><Link to="/kids-corner" onClick={handleLinkClick} className={location.pathname === '/kids-corner' ? 'active' : ''}>Kid's Corner</Link></li>
        <div className="navbar-contact" style={{"--i": 5}}>
          <Link to="/contact" onClick={handleLinkClick} className={`contact-button ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>
      </ul>
    </nav>
  );
};
