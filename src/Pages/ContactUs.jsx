import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/ContactUs.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await axios.post("http://localhost:3000/api/contact/create", formData);
      console.log("Message Submitted:", response.data);

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        navigate("/");
      }, 3000);

      setFormData({ fullName: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting message:", err);
      setError("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <div className="info-box">
          <h3>Need Help Planning Your Perfect Stay?</h3>
          <p>
            <a href="https://maps.google.com?q=Kathmandu" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa fa-location-dot"></i>
            </a> 
            Head Office Kathmandu
          </p>
          <p>
            <a href="tel:+9779813763384" className="contact-link">
              <i className="fa fa-phone"></i>
            </a> 
            +977 9813763384
          </p>
          <p>
            <a href="mailto:merothau45@gmail.com" className="contact-link">
              <i className="fa fa-envelope"></i>
            </a> 
            merothau45@gmail.com
          </p>
          <p>
            <a href="https://www.facebook.com/MeroThau" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-brands fa-facebook"></i>
            </a> 
            MeroThau
          </p>
          <p>
            <a href="https://www.instagram.com/Merothau_122" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-brands fa-instagram"></i>
            </a> 
            Merothau_122
          </p>
        </div>

        <div className="message-box">
          <h3>We'd Love To Hear From You!</h3>
          <p>Have a Question About Our Services?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Type Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">SEND</button>
          </form>

          {submitted && <p className="success-message">Submitted Successfully!</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
