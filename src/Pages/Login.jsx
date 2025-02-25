import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/home"); // Redirect to home if already logged in
  //   }
  // }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users/login", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userID", response.data.user.id);
      console.log(localStorage.getItem("userID"))
      navigate("/home"); // Redirect to Home after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login now!</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange} />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">LOGIN</button>
        </form>
        <p className="register-text">
          Don’t have an account? <a href="#" onClick={() => navigate("/register")}>Create Now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
