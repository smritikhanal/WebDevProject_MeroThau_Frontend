import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/ManageHotel.css";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  
  const [hotelData, setHotelData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    rooms: "",
    discountPercent: "",
    description: [],
    services: [], // ✅ Added services field

    mainImage: null,
    images: [],
  });

  const [descriptionPoint, setDescriptionPoint] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/hotels/get-all-hotels");
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const handleOpenModal = (hotel = null) => {
    if (hotel) {
      setIsEditing(true);
      setSelectedHotelId(hotel.id);
      setHotelData({
        name: hotel.name,
        location: hotel.location,
        price: hotel.price,
        rating: hotel.rating,
        rooms: hotel.rooms,
        discountPercent: hotel.discountPercent || "",
        description: hotel.description || [],
        mainImage: null,
        images: [],
      });
      setMainImagePreview(hotel.mainImage || null);
      setImagePreviews(hotel.images || []);
    } else {
      setIsEditing(false);
      setHotelData({
        name: "",
        location: "",
        price: "",
        rating: "",
        rooms: "",
        discountPercent: "",
        description: [],
        mainImage: null,
        images: [],
      });
      setMainImagePreview(null);
      setImagePreviews([]);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsEditing(false);
    setSelectedHotelId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({ ...hotelData, [name]: value });
  };

  const handleDescriptionAdd = () => {
    if (descriptionPoint.trim() !== "") {
      setHotelData({ ...hotelData, description: [...hotelData.description, descriptionPoint] });
      setDescriptionPoint("");
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHotelData({ ...hotelData, mainImage: file });
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setHotelData({ ...hotelData, images: [...hotelData.images, ...files] });

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previewUrls]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", hotelData.name);
    formData.append("location", hotelData.location);
    formData.append("price", hotelData.price);
    formData.append("rating", hotelData.rating);
    formData.append("rooms", hotelData.rooms);
    formData.append("discountPercent", hotelData.discountPercent);
    formData.append("mainImage", hotelData.mainImage);

    hotelData.images.forEach((img) => {
      formData.append("images", img);
    });

    formData.append("description", JSON.stringify(hotelData.description));

    try {
      if (isEditing) {
        await axios.put(`http://localhost:3000/api/hotels/update-hotel/${selectedHotelId}`, formData);
      } else {
        await axios.post("http://localhost:3000/api/hotels/add-hotel/", formData);
      }
      fetchHotels();
      handleCloseModal();
    } catch (error) {
      console.error("Error saving hotel:", error);
    }
  };


  const handleRemoveDescription = (index) => {
    const updatedDescription = hotelData.description.filter((_, i) => i !== index);
    setHotelData({ ...hotelData, description: updatedDescription });
  };
  
  const handleDeleteImage = async (index) => {
    if (!isEditing) {
      // Remove only from frontend if adding a new hotel
      const newImages = [...hotelData.images];
      newImages.splice(index, 1);
      setHotelData({ ...hotelData, images: newImages });
  
      const newPreviews = [...imagePreviews];
      newPreviews.splice(index, 1);
      setImagePreviews(newPreviews);
      return;
    }
  
    // If editing, send update request to backend
    const updatedImages = hotelData.images.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
  
    setHotelData({ ...hotelData, images: updatedImages });
    setImagePreviews(updatedPreviews);
  
    try {
      await axios.put(`http://localhost:3000/api/hotels/update-hotel/${selectedHotelId}`, {
        images: updatedImages,
      });
      fetchHotels(); // Refresh the hotel list
    } catch (error) {
      console.error("Error updating hotel images:", error);
    }
  };
  

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      try {
        await axios.delete(`http://localhost:3000/api/hotels/delete-hotel/${id}`);
        fetchHotels();
      } catch (error) {
        console.error("Error deleting hotel:", error);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Hotels</h2>
      <button onClick={() => handleOpenModal()} style={{ marginBottom: "10px" }}>
        + Add New Hotel
      </button>

      {/* ✅ Hotels Table */}
      <table className="hotels-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Rating</th>
            <th>Rooms</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>Rs. {hotel.price}</td>
              <td>{hotel.discountPercent || 0}%</td>
              <td>{hotel.rating}</td>
              <td>{hotel.rooms}</td>
              <td>
                <button onClick={() => handleOpenModal(hotel)}>Edit</button>
                <button onClick={() => handleDelete(hotel.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Overlay Modal */}
      {modalOpen && (
        <div className="manage-hotel-overlay">
          <div className="modal">
            <h2>{isEditing ? "Edit Hotel" : "Add New Hotel"}</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <input type="text" name="name" placeholder="Hotel Name" value={hotelData.name} onChange={handleChange} required />
              <input type="text" name="location" placeholder="Location" value={hotelData.location} onChange={handleChange} required />
              <input type="number" name="price" placeholder="Price per Night" value={hotelData.price} onChange={handleChange} required />
              <input type="number" name="rating" placeholder="Rating (1-5)" value={hotelData.rating} onChange={handleChange} required />
              <input type="number" name="rooms" placeholder="Available Rooms" value={hotelData.rooms} onChange={handleChange} required />

              <label>Description:</label>
<input
  type="text"
  placeholder="Enter Description "
  value={descriptionPoint}
  onChange={(e) => setDescriptionPoint(e.target.value)}
/>
<button type="button" onClick={handleDescriptionAdd}>+ Add Description</button>

{/* ✅ Display Description Points */}
<ul>
  {hotelData.description.map((desc, index) => (
    <li key={index} >
      {desc}
      <button 
        id="icon-btn-desc" 
        onClick={() => handleRemoveDescription(index)} 
   
      >
        ✖
      </button>
    </li>
  ))}
</ul>



              <input type="number" name="discountPercent" placeholder="Discount (%)" value={hotelData.discountPercent} onChange={handleChange} required />
              <label>Main Hotel Image:</label>
<input type="file" accept="image/*" onChange={handleMainImageChange} required={!isEditing} />
<div className="image-preview-wrapper">
  {mainImagePreview && (
    <div className="image-container">
      <img src={mainImagePreview} alt="Main Preview" className="main-image-preview" />
      <button className="icon-btn" onClick={() => setMainImagePreview(null)}>✖</button>
    </div>
  )}
</div>

<label>Additional Images:</label>
<input type="file" accept="image/*" multiple onChange={handleImagesChange} />

<div className="image-preview-container">
  {imagePreviews.map((src, index) => (
    <div key={index} className="image-container">
      <img src={src} alt={`Preview ${index}`} className="additional-images-preview" />
      <button className="icon-btn" onClick={() => handleDeleteImage(index)}>✖</button>
    </div>
  ))}
</div>

<input type="file" id="add-images" accept="image/*" multiple onChange={handleImagesChange} style={{ display: "none" }} />


              <button type="submit">{isEditing ? "Update Hotel" : "Add Hotel"}</button>
              <button onClick={handleCloseModal} className="close-btn">Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotels;
