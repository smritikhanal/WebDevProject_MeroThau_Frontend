
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./../Styles/Login.css"; // Import CSS file

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    // After successful login logic (e.g., authentication), set the flag in localStorage
    localStorage.setItem("loginClicked", "true"); // Set loginClicked to true in localStorage
    navigate("/AboutUs"); // Navigate to the About Us page
  };

  const handleForgotPassword = () => {
    navigate("/ForgotPassword"); // Navigate to forgot password page
  };

  const handleCreateAccount = () => {
    navigate("/Register"); // Navigate to register page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login now!</h2>

        <form >
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="options">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
          </div>

          <button type="submit" className="login-btn" onClick={handleLogin}>LOGIN</button>
        </form>

        <p className="register-text">
          Don’t have an account? <a href="#" className="create-now" onClick={handleCreateAccount}>Create Now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

