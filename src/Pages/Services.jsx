import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
    if (checkIn && checkOut && rooms && guests) {
      // Passing query parameters to Allhotels page
      navigate(`/all-hotels?checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`);
    } else {
      alert("Please fill in all fields before confirming.");
    }
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
              placeholder="e.g., 2"
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
              placeholder="e.g., 4"
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
