import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import "../HotelStyles/LakesideStay.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import lakeside1 from "../assets/lakeside stay 1.jpg";
import lakeside2 from "../assets/lakeside stay 2.jpg";
import lakeside3 from "../assets/lakeside stay 3.jpg";
import lakeside4 from "../assets/lakeside stay 4.jpg";
import lakeside5 from "../assets/lakeside stay 5.jpg";
import lakeside6 from "../assets/lakeside stay 6.jpg";


const LakesideStay = () => {
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
                          <h1>Lakeside Stay</h1>
                  
                          <div className="hotel-images">
                            <img src={lakeside1} alt="Hotel Image 1" />
                            <img src={lakeside2}  alt="Hotel Image 2" />
                            <img src={lakeside3}  alt="Hotel Image 3" />
                            <img src={lakeside4}  alt="Hotel Image 4" />
                            <img src={lakeside5}  alt="Hotel Image 5" />
                            <img src={lakeside6}  alt="Hotel Image 6" />
                          </div>
                  
                          <div className="services-list">
                            <h2>Our Services</h2>
                            <ul>
                            <li>Security</li>
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
                            
                              <p>{rooms} Room ,{guests} Guests</p>
                              <p style={{ color: 'red' }}>*No Children</p>
                            </div>
                            <div>
                              <h3>Check Out</h3>
                              <p>{checkOut}</p>
                            </div>
                          </div>
                  
                          <div className="price-info">
                          <p><span class="discount">Rs. 5,500</span> → Rs. 4,500</p>
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
  
  export default LakesideStay;
