import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../HotelStyles/HotelMalla.css"; 

const HotelDetails = () => {
  const { id } = useParams(); // Get hotel ID from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const checkIn = queryParams.get('checkIn');
  const checkOut = queryParams.get('checkOut');
  const rooms = queryParams.get('rooms');
  const guests = queryParams.get('guests');

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/hotels/get-hotel-by-id/${id}`)
      .then(response => response.json())
      .then(data => setHotel(data))
      .catch(error => console.error("Error fetching hotel:", error));
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <section className="hotel-container">
        <div className="hotel-card">
          <h1>{hotel.name}</h1>

          <div className="hotel-images">
            <img src={hotel.mainImage} alt="Main Hotel Image" />
            {hotel.images.map((img, index) => (
              <img key={index} src={img} alt={`Hotel Image ${index + 1}`} />
            ))}
          </div>

          <div className="services-list">
            <h2>Our Services</h2>
            <ul>
              {hotel.description.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="check-in-out">
            <div>
              <h3>Check In</h3>
              <p>{checkIn}</p>
              <p>{rooms} Room, {guests} Guests</p>
              <p style={{ color: 'red' }}>*No Children</p>
            </div>
            <div>
              <h3>Check Out</h3>
              <p>{checkOut}</p>
            </div>
          </div>

          <div className="price-info">
            <p>
              <span className="discount">Rs. {hotel.price + 500}</span> → Rs. {hotel.price}
            </p>
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

export default HotelDetails;
