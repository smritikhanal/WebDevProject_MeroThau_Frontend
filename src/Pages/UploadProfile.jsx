import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/UploadProfile.css";

const UploadProfile = () => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showUploadOption, setShowUploadOption] = useState(false);
  const navigate = useNavigate();

  // Fetch user details when component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("userID");
    setUserId(storedUserId);

    if (storedUserId) {
      axios
        .get(`http://localhost:3000/api/users/get-user-details/${storedUserId}`)
        .then((response) => {
          const user = response.data;
          setUserData({
            name: user.name || "",
            email: user.email || "",
            contactNumber: user.contactNumber || "",
            address: user.address || "",
          });

          if (user.profilePic) {
            setPreview(user.profilePic);
          }
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview before upload
      setShowUploadOption(false); // Hide upload option after selection
    }
  };

  // Toggle upload option visibility on image click
  const handleImageClick = () => {
    setShowUploadOption((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("contactNumber", userData.contactNumber);
    formData.append("address", userData.address);
    if (image) {
      formData.append("profileImage", image);
    }

    try {
      await axios.put(`http://localhost:3000/api/users/update/${userId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("User profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="upload-profile-page">
        <div className="upload-profile-container">
          <h2>Upload Profile</h2>

          <div className="image-upload-section">
            <div className="profile-image-wrapper">
              <div className="image-circle" onClick={handleImageClick}>
                {preview ? (
                  <>
                    <img src={preview} alt="Profile" className="uploaded-image" />
                    {showUploadOption && (
                      <label className="upload-new-photo">
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        Upload New Photo
                      </label>
                    )}
                  </>
                ) : (
                  <label className="upload-box">
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    Upload Image
                  </label>
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="upload-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input-field"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              required
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Phone Number"
              className="input-field"
              value={userData.contactNumber}
              onChange={(e) => setUserData({ ...userData, contactNumber: e.target.value })}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input-field"
              value={userData.address}
              onChange={(e) => setUserData({ ...userData, address: e.target.value })}
              required
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadProfile;
