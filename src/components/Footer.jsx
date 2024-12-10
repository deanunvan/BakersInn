import React from "react";
import "./Footer.css"; // Import the separate CSS file
import "remixicon/fonts/remixicon.css"; // Import Remix Icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
        </div>
      </div>
      <div className="footer-content">
        {/* Instagram Feed */}
        <div className="footer-section">
          <h4 className="footer-title">Instagram Feed</h4>
          <div className="footer-images">
            <div className="feed-1"></div>
            <div className="feed-2"></div>
            <div className="feed-3"></div>
          </div>
          <div className="footer-socials">
            <i className="ri-twitter-line"></i>
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-linkedin-box-line"></i>
          </div>
        </div>
        {/* Our Location */}
        <div className="footer-section">
          <h4 className="footer-title">Our Location</h4>
          <p>1 Shepperton Road, Graniteside, Harare, Zimbabwe.</p>
        </div>
        {/* Get In Touch */}
        <div className="footer-section">
          <h4 className="footer-title">Get In Touch With Us</h4>
          <p><i className="ri-phone-line"></i> 08080151, 08080152</p>
          <p><i className="ri-phone-line"></i> +263 242 751 481</p>
          <p><i className="ri-mail-line"></i> marketing@bakersinnzim.com</p>
        </div>
        {/* Sitemap */}
        <div className="footer-section">
          <h4 className="footer-title">Sitemap</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Recipes</li>
            <li>Kids Corner</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Subsidiary of Innscor <div className="innscor-logo"></div></p>
        <p>
          Copyright © 2022 Bakers Inn. All rights reserved. Site by{" "}
          <span className="highlight">NoWalls Pan Africa</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
