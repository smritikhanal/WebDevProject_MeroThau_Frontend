import React, { useState } from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation, Link } from 'react-router-dom';
import "../HotelStyles/HotelMalla.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import HotelMalla1 from "../assets/hotelmalla 1.jpg";
import HotelMalla2 from "../assets/hotelmalla 2.jpg";
import HotelMalla3 from "../assets/hotelmalla 3.jpg";
import HotelMalla4 from "../assets/hotelmalla 4.jpg";
import HotelMalla5 from "../assets/hotelmalla 5.jpg";
import HotelMalla6 from "../assets/hotelmalla 6.jpg";

const HotelMalla = () => {
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
                  <h1>HotelMalla</h1>
          
                  <div className="hotel-images">
                    <img src={HotelMalla1} alt="Hotel Image 1" />
                    <img src={HotelMalla2}  alt="Hotel Image 2" />
                    <img src={HotelMalla3}  alt="Hotel Image 3" />
                    <img src={HotelMalla4}  alt="Hotel Image 4" />
                    <img src={HotelMalla5}  alt="Hotel Image 5" />
                    <img src={HotelMalla6}  alt="Hotel Image 6" />
                  </div>
          
                  <div className="services-list">
                    <h2>Our Services</h2>
                    <ul>
                    <li>Fitness Room</li>
                    <li>Security</li>
                <li>Parking</li>
                <li>Medical</li>
                <li>Spa</li>
                <li>Luggage Racks</li>
                <li>Restaurant</li>
                <li>Bar</li>
                <li>Room Services</li>
                    </ul>
                  </div>
          
                  <div className="check-in-out">
                    <div>
                      <h3>Check In</h3>
                      {checkIn}
                      
                      <p>{rooms} Room ,{guests} Guests</p>
                      <p style={{ color: 'red' }}>*No Children</p>
                    </div>
                    <div>
                      <h3>Check Out</h3>
                      {checkOut}
                    </div>
                  </div>
          
                  <div className="price-info">
                  <p><span class="discount">Rs. 32,000</span> → Rs. 28,000</p>
                  <p>Including Tax</p>
                    <div className="confirm-booking">
                    <Link to={`/Pages/Confirmation?hotelName=HotelMalla&checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`}>
  Confirm Your Booking
</Link>
                    </div>
                  </div>
                </div>
              </section>


        <Footer />
    </div>
    );
    
  };
  
  export default HotelMalla;
