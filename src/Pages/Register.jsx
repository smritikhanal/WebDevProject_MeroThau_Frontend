import React from 'react';

import { Link } from "react-router-dom";
import "./../Styles/Register.css"; 

const Register = () => {
  return (
    <div className="container">
      <div className='register-container'>
      <h2>Create Your Account Now!</h2>
      <form className='register-form'>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input type="text" placeholder="Enter your contact number" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <button type="submit" className="submit-btn">
          CREATE ACCOUNT
        </button>
      </form>

      <p className="login-link">
        
      Already have an account? <Link to="/Login" className="LogIn">Log In</Link>

      </p>
      </div>
    </div>
  );
};

export default Register;
