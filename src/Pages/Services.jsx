import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/Services.css";

const Services = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const handleSearch = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (!checkIn || !checkOut || !rooms || !guests) {
      alert("Please fill in all fields before confirming.");
      return;
    }

    if (checkInDate <= today) {
      alert("Check-in date must be greater than today's date.");
      return;
    }

    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after the check-in date.");
      return;
    }

    // Navigate with query parameters
    navigate(`/all-hotels?checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`);
  };

  return (
    <div>
      <Navbar />
      <section className="search-section">
        <div className="search-container">
          <div className="search-field">
            <label htmlFor="checkin">Check In Date:</label>
            <input
              type="date"
              id="checkin"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label htmlFor="checkout">Check Out Date:</label>
            <input
              type="date"
              id="checkout"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label htmlFor="rooms">No. Of Rooms:</label>
            <input
              type="number"
              id="rooms"
              min="1"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </div>
          <div className="search-field">
            <label htmlFor="guests">No. Of Guests:</label>
            <input
              type="number"
              id="guests"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <button className="search-button" onClick={handleSearch}>CONFIRM</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
