import React from 'react';
import { NavLink } from "react-router-dom";  // Import NavLink
import Navbar from '../Components/Navbar';  
import Footer from '../Components/Footer';  
import "../Styles/AboutUs.css";
import image1 from "../assets/cozyroom.jpg";
import image2 from "../assets/Modern Living Area.jpg";
import image3 from "../assets/Happy Family in Living Room.jpg";

const AboutUs = () => {
  return (
    <div>
        <Navbar />
       
      
      <section className="about-section">
        <div className="about-container">
          <div className="text-side">
            <h2>Welcome to MeroThau</h2>
            <p>
              Your second home awaits! Whether it's a quick getaway or a long-term stay, Merothau offers cozy, thoughtfully curated spaces designed for comfort and relaxation. Experience home wherever you are!
            </p>
            <NavLink to="/services" className="cta-button" activeClassName="active-link">Explore Our Services</NavLink> {/* Use NavLink */}
          </div>

          <div className="image-side">
            <img src={image1} alt="Cozy Room" className="about-image"/>
            <img src={image2} alt="Modern Living Area" className="about-image"/>
            <img src={image3} alt="Happy Family in Living Room" className="about-image"/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
