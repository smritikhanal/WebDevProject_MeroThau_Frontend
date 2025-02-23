import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import "../HotelStyles/KarmaVilla.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import KarmaVilla1 from "../assets/karma villa 1.jpg";
import KarmaVilla2 from "../assets/karma villa 2.jpg";
import KarmaVilla3 from "../assets/karma villa 3.jpg";
import KarmaVilla4 from "../assets/karma villa 4.jpg";
import KarmaVilla5 from "../assets/karma villa 5.jpg";
import KarmaVilla6 from "../assets/karma villa 6.jpg";


const KarmaVilla = () => {
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
                          <h1>KarmaVilla</h1>
                  
                          <div className="hotel-images">
                            <img src={KarmaVilla1}  alt="Hotel Image 1" />
                            <img src={KarmaVilla2}  alt="Hotel Image 2" />
                            <img src={KarmaVilla3}  alt="Hotel Image 3" />
                            <img src={KarmaVilla4}  alt="Hotel Image 4" />
                            <img src={KarmaVilla5}  alt="Hotel Image 5" />
                            <img src={KarmaVilla6}  alt="Hotel Image 6" />
                          </div>
                  
                          <div className="services-list">
                            <h2>Our Services</h2>
                            <ul>
                            <li>Swimming Pool</li>
                <li>Security</li>
                <li>Parking</li>
                <li>Medical</li>
                <li>Spa</li>
                <li>Restaurant</li>
                <li>Bar</li>
                <li>Room Services</li>
                            </ul>
                          </div>
                  
                          <div className="check-in-out">
                            <div>
                              <h3>Check In</h3>
                              <p>{checkIn}</p>
                              <p>{rooms} Room ,{guests} Guests</p>
                              
                              <p style={{ color: 'red' }}>*No Children</p>
                            </div>
                            <div>
                              <h3>Check Out</h3>
                              <p>{checkOut}</p>
                            </div>
                          </div>
                  
                          <div className="price-info">
                          <p><span class="discount">Rs. 22,000</span> → Rs. 18,000</p>
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
  
  export default KarmaVilla;
