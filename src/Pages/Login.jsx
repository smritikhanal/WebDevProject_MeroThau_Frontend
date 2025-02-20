import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests
import "./../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  // State to handle form inputs and errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Update state when form fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the login endpoint
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        formData
      );

      // Store the token and user data in localStorage if needed
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Optionally, you can set a flag or do any other processing here
      localStorage.setItem("loginClicked", "true");

      // Navigate to the About Us page upon successful login
      navigate("/AboutUs");
    } catch (err) {
      console.error("Login error:", err.response.data);
      setError(err.response.data.message || "Login failed. Please try again.");
    }
  };

  // Navigate to Forgot Password page
  const handleForgotPassword = () => {
    navigate("/ForgotPassword");
  };

  // Navigate to Register page
  const handleCreateAccount = () => {
    navigate("/Register");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login now!</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <div className="options">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" onClick={handleForgotPassword}>
              Forgot password?
            </a>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        <p className="register-text">
          Don’t have an account?{" "}
          <a href="#" className="create-now" onClick={handleCreateAccount}>
            Create Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
