import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "../Styles/Navbar.css"; 
import logo from "../assets/logo.png"; 
import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon (FontAwesome)

const Navbar = () => {
  const [loginClicked, setLoginClicked] = useState(false); // State to track Login button click
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Check if loginClicked is stored in localStorage
    const loggedIn = localStorage.getItem("loginClicked");
    if (loggedIn === "true") {
      setLoginClicked(true); // Set the state if loginClicked is true
    }
  }, [location]); // Re-run when the location changes

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

        <Link 
          to="/AboutUs" 
          className={ location.pathname.startsWith("/AboutUs") ? "active" : ""}
        >
          About Us
        </Link>

        <Link 
          to="/services" 
          className={location.pathname.startsWith("/services") ||
            location.pathname.startsWith("/all-hotels") ||
            location.pathname.startsWith("/ReviewFeedback") ||
            location.pathname.startsWith("/Hotels/HotelMalla") ||
            location.pathname.startsWith("/Hotels/Fishtail") ||
            location.pathname.startsWith("/Hotels/KarmaVilla") ||
            location.pathname.startsWith("/Hotels/LakesideStay") ||
            location.pathname.startsWith("/Pages/Confirmation") 
            ? "active" : ""
          }
        >
          Services
        </Link>
        <Link to="/contactus" className={location.pathname === "/contactus" ? "active" : ""}>
          Contact Us
        </Link>
      </nav>

      {/* Conditionally render the Login button on the homepage */}
      {location.pathname === "/home" && (
        <>
          <button className="auth-button">
            <Link to="/login">Login</Link>
          </button>
          
          {/* Profile Icon with Tooltip */}
          <div className="profile-icon-container">
            <Link to="/profile">
              <FaUserCircle className="profile-icon" />
            </Link>
            <span className="tooltip">Update Your Profile</span>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
