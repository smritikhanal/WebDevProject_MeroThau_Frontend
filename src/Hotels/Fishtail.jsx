import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import "../HotelStyles/Fishtail.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import Fishtail1 from "../assets/fishtail lodge 1.jpg";
import Fishtail2 from "../assets/fishtail lodge 2.jpg";
import Fishtail3 from "../assets/fishtail lodge 3.jpg";
import Fishtail4 from "../assets/fishtail lodge 4.jpg";

const Fishtail = () => {
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const checkIn = queryParams.get('checkIn');
    const checkOut = queryParams.get('checkOut');
    const rooms = queryParams.get('rooms');
    const guests = queryParams.get('guests');
    return (
        <div>
      
        <Navbar />
    
      <section className="hotel-container">
        <div className="hotel-card">
          <h1>Fishtail Guest House</h1>
  
          <div className="hotel-images">
            <img src={Fishtail1} alt="Hotel Image 1" />
            <img src={Fishtail2}  alt="Hotel Image 2" />
            <img src={Fishtail3}  alt="Hotel Image 3" />
            <img src={Fishtail4}  alt="Hotel Image 4" />
          </div>
  
          <div className="services-list">
            <h2>Our Services</h2>
            <ul>
              <li>Free Wifi</li>
              <li>Parking</li>
              <li>Medical</li>
              <li>Restaurant</li>
              <li>Room Services</li>
            </ul>
          </div>
  
          <div className="check-in-out">
            <div>
              <h3>Check In</h3>
              <p>{checkIn}</p>
              
              <p> {rooms} Room ,{guests} Guests</p>
              <p style={{ color: 'red' }}>*No Children</p>
            </div>
            <div>
              <h3>Check Out</h3>
              <p>{checkOut}</p>
            </div>
          </div>
  
          <div className="price-info">
          <p><span class="discount">Rs. 2,200</span> → Rs. 1,500</p>
          <p>Including Tax</p>
            <div className="confirm-booking">
            <Link to="/Pages/Confirmation">Confirm Your Booking</Link>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    );
    
  };
  
  export default Fishtail;