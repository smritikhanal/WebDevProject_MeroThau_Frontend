// src/components/Footer.jsx
import React from "react";
import "../Styles/Footer.css"; // Import the CSS for the Footer
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <span className="phone"><i className="fa fa-phone"></i> +977 9813763384</span>
        <span className="email"><i className="fa fa-envelope"></i> merothau45@gmail.com</span>
      </div>
      <div className="social-media">
        <span>Follow us on Social Media</span>
        <div className="icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
