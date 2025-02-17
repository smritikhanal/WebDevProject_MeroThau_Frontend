import React from 'react';
import { Link } from "react-router-dom"; 
import Navbar from '../Components/Navbar';  
import Footer from '../Components/Footer';  
import "../Styles/HomePage.css"; 
import heroImage from "../assets/hero-image.jpg";

const HomePage = () => {
    return (
      <div>
        <Navbar />
       
        
        <div className="hero">
          <img src={heroImage} alt="Beautiful Stay" className="hero-image" />
          <div className="overlay">
            <h1> MEROTHAU</h1>
            <p>Your Stay, Just a Click Away!</p>
            
          </div>
        </div>
  
        <Footer />
      </div>
    );
};

export default HomePage;
