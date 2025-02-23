import React, { useState } from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';  // Import useNavigate
import axios from 'axios'; // Import Axios
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
const queryParams = new URLSearchParams(location.search);

const hotelName = queryParams.get('hotelName');
const checkInDate = queryParams.get('checkIn');
const checkOutDate = queryParams.get('checkOut');
const rooms = queryParams.get('rooms');
const guests = queryParams.get('guests');
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    remarks: "",
    paymentMethod: "",
    checkInDate,
    checkOutDate,
    hotelName: hotelName, // Assuming you are passing the hotel name here
    numberOfRooms: rooms,  // You can add number of rooms based on user input
    numberOfGuests: guests, // Similarly, number of guests
  });

  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio") {
      setFormData({ ...formData, paymentMethod: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    // Send the form data to the backend API
    try {
      const response = await axios.post('http://localhost:3000/api/bookings/create', formData);
      console.log("Booking Response:", response.data);
      
      // Show success message for 3 seconds before redirecting
      setTimeout(() => {
        navigate("/");  // Redirect to homepage after 3 seconds
      }, 3000);  // 3 seconds delay
    } catch (error) {
      console.error("Error creating booking:", error);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className="confirmation-page">
      <Navbar />

      <div className="confirmation-container">
        <div className="confirmation-box">
          <h3>Confirmation Of Your Booking</h3>
          <p className="confirmation-message">We have received your details. Please review the information below:</p>

          <form onSubmit={handleSubmit} className="confirmation-form">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Enter contact number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Remarks:</label>
            <input
              type="text"
              name="remarks"
              placeholder="Enter remarks"
              value={formData.remarks}
              onChange={handleChange}
            />

            <label>Payment Method:</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash"
                  checked={formData.paymentMethod === "Cash"}
                  onChange={handleChange}
                /> Cash
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Fonepay"
                  checked={formData.paymentMethod === "Fonepay"}
                  onChange={handleChange}
                /> Fonepay
              </label>
            </div>

            <button type="submit" className="submit-btn">Confirm</button>
          </form>

          {submitted && <p className="success-message">Your booking has been confirmed!</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Confirmation;
