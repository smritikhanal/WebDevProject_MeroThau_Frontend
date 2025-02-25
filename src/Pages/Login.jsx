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

  // Redirect to home if already logged in
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData, "formaData");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setError(""); // Reset error message

    try {
      const response = await axios.post("http://localhost:3000/api/users/login", formData);
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userID", user.id);

      console.log("User ID:", localStorage.getItem("userID"));
      navigate("/home");
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
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        <p className="register-text">
          Don’t have an account?{" "}
          <a href="#" onClick={() => navigate("/register")}>
            Create Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
