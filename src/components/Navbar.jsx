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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to='/'><img className='logo' src={logo} alt='Our Logo' /></Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>
        <li><Link to="/recipes" className={location.pathname === '/recipes' ? 'active' : ''}>Recipes</Link></li>
        <li><Link to="/kids-corner" className={location.pathname === '/kids-corner' ? 'active' : ''}>Kid's Corner</Link></li>
        <div className="navbar-contact">
          <Link to="/contact" className={`contact-button ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>
      </ul>
    </nav>
  );
};
