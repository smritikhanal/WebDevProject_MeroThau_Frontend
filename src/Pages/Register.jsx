import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // Importing eye icons
import "./../Styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/users/create", {
        name: formData.name,
        contactNumber: formData.contactNumber,
        email: formData.email,
        password: formData.password,
      });

      setIsSuccess(true);
      setTimeout(() => navigate("/"), 1000); // Redirect to login page after 1 sec
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration");
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <h2>Create Your Account Now!</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

          <label>Contact Number</label>
          <input type="text" name="contactNumber" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <div className="password-container">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
            {showPassword ? (
              <EyeOff className="eye-icon" onClick={() => setShowPassword(false)} />
            ) : (
              <Eye className="eye-icon" onClick={() => setShowPassword(true)} />
            )}
          </div>

          <label>Confirm Password</label>
          <div className="password-container">
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
            {showConfirmPassword ? (
              <EyeOff className="eye-icon" onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <Eye className="eye-icon" onClick={() => setShowConfirmPassword(true)} />
            )}
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-btn">CREATE ACCOUNT</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
