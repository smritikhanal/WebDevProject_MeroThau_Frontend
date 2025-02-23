import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Corrected to useNavigate
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/UploadProfile.css";

const UploadProfile = () => {
    const [image, setImage] = useState(null);
    const [showChangeOption, setShowChangeOption] = useState(false);
    const navigate = useNavigate();
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
          setShowChangeOption(false);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleImageClick = () => {
      setShowChangeOption((prev) => !prev);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/");
    };
  
    return (
      <>
        <Navbar />
        <div className="upload-profile-page">
          <div className="upload-profile-container">
            <h2>Upload Profile</h2>
            <form onSubmit={handleSubmit} className="upload-form">
              <div className="image-upload-section">
                {image ? (
                  <div className="profile-image-wrapper" onClick={handleImageClick}>
                    <img src={image} alt="Profile" className="uploaded-image" />
                    {showChangeOption && (
                      <div className="change-image-box">
                        <label className="change-image-option">
                          Change Profile Picture
                          <input type="file" accept="image/*" onChange={handleImageChange} />
                        </label>
                      </div>
                    )}
                  </div>
                ) : (
                  <label className="upload-box">
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    Upload Image
                  </label>
                )}
              </div>
              <input type="text" placeholder="Full Name" className="input-field" required />
              <input type="email" placeholder="Email" className="input-field" required />
              <input type="text" placeholder="Phone Number" className="input-field" required />
              <input type="text" placeholder="Address" className="input-field" required />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default UploadProfile;
  
  