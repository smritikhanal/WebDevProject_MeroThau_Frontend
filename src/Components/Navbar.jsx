import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa"; // Profile Icon

const Navbar = () => {
  const [loginClicked, setLoginClicked] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loginClicked");
    if (loggedIn === "true") {
      setLoginClicked(true);
    }
  }, [location]);

  // Function to check if a route should be active for "Services"
  const isServicesActive = () => {
    const serviceRoutes = [
      "/services",
      "/all-hotels",
      "/ReviewFeedback",
      "/Pages/Confirmation",
    ];
    return (
      serviceRoutes.some((route) => location.pathname.startsWith(route)) ||
      location.pathname.includes("/Hotels/")
    );
  };

  return (
    <header className="navbar-header">
      <div className="logo">
        <img src={logo} alt="Mero Thau Logo" />
        <h1>मेरो Thau</h1>
      </div>
      <nav>
        <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>
          Home
        </Link>
        <Link to="/AboutUs" className={location.pathname.startsWith("/AboutUs") ? "active" : ""}>
          About Us
        </Link>
        <Link to="/services" className={isServicesActive() ? "active" : ""}>
          Services
        </Link>
        <Link to="/contactus" className={location.pathname === "/contactus" ? "active" : ""}>
          Contact Us
        </Link>
      </nav>

      {/* Conditionally show the Login button only on the Home page */}
      <div className="auth-section">
        {location.pathname === "/home" && (
          <Link to="/" onClick={() => localStorage.removeItem("userID")}>
            <button className="auth-button">Login</button>
          </Link>
        )}

        {/* Profile Icon with Hover Tooltip */}
        <div className="profile-icon-container">
          <Link to="/profile">
            <FaUserCircle className="profile-icon" />
          </Link>
          <span className="tooltip">Update Your Profile</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
