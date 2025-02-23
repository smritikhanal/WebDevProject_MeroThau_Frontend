import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./../Styles/Register.css"; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirection after successful signup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation example
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Post form data to the backend
      const response = await axios.post('http://localhost:3000/api/users/create', {
        name: formData.name,
        contactNumber: formData.contactNumber,
        email: formData.email,
        password: formData.password,
      });
      
      console.log(response.data);
      // Optionally, redirect the user to the login page or dashboard
      navigate("/");
      
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.message || "An error occurred during registration");
    }
  };

  return (
    <div className="container">
      <div className='register-container'>
        <h2>Create Your Account Now!</h2>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input 
              type="text" 
              name="contactNumber" 
              placeholder="Enter your contact number" 
              value={formData.contactNumber}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              value={formData.password}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm your password" 
              value={formData.confirmPassword}
              onChange={handleChange} 
              required 
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-btn">
            CREATE ACCOUNT
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login" className="LogIn">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
