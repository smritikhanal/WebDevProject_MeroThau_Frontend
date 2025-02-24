import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/Allhotels.css";

const Allhotels = () => {
  const [hotels, setHotels] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const checkIn = queryParams.get('checkIn');
  const checkOut = queryParams.get('checkOut');
  const rooms = queryParams.get('rooms');
  const guests = queryParams.get('guests');

  // Fetch hotels from backend
  useEffect(() => {
    fetch("http://localhost:3000/api/hotels/get-all-hotels")  // Replace with your actual backend URL
      .then(response => response.json())
      .then(data => setHotels(data))
      .catch(error => console.error("Error fetching hotels:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className='hotel-main'>
        {hotels.map(hotel => {
          const discountPercent = hotel.discountPercent || 0; // Ensure it exists
          const discountedPrice = hotel.price - (hotel.price * discountPercent / 100);

          return (
            <div className="stay" key={hotel.id}>
              <img src={hotel.mainImage} alt={hotel.name} />
              <div className="stay-info">
                <h2>{hotel.name}</h2>
                <p><span className="badge">Wonderful</span> {hotel.rating} Stars</p>
                <p>
                  {[...Array(hotel.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </p>

                {/* ✅ Price Section */}
                <p>
                  {discountPercent > 0 ? (
                    <>
                      <span style={{ textDecoration: "line-through", color: "red", fontWeight: "bold", marginRight: "8px" }}>
                        Rs. {hotel.price}
                      </span>
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Rs. {discountedPrice.toFixed(2)}
                      </span>
                      <span style={{ color: "green", marginLeft: "8px", fontWeight: "bold" }}>
                        ({discountPercent}% off)
                      </span>
                    </>
                  ) : (
                    <span>Rs. {hotel.price}</span>
                  )}
                </p>

                <p><i className="fas fa-map-marker-alt"></i> {hotel.location}</p>
                <div className="buttons">
                  <Link 
                    to={`/Hotels/${hotel.id}?checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`} 
                    className="viewmore"
                  >
                    View More
                  </Link>
                  <Link to="/ReviewFeedback" className="feedback">Feedback</Link>  
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Allhotels;
