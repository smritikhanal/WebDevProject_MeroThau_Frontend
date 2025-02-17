import React, { useState } from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email or username.");
      return;
    }
    alert("Password reset link sent to: " + email);
  };

  return (
    <div className="fg-container">
    <div className="forgot-password-container">
      
      <h2>Find Your Account</h2>
      <p>Enter Your Email Or Username</p>
      <input
        type="text"
        placeholder="Enter email or username"
        value={email}
        onChange={handleChange}
        required
      />
      <p>You may receive WhatsApp and SMS notifications from us for security and login purposes.</p>
      <button className="btn" onClick={handleSubmit}>
        CONTINUE
      </button>

      {/* Link to Login Page */}
      <p className="back-to-login">
        <Link to="/Login">Back to Login</Link>
      </p>
      
    </div>
    </div>
  );
};

export default ForgotPassword;
