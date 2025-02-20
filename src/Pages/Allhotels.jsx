import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'; 
import Footer from '../Components/Footer'; 
import "../Styles/Allhotels.css";
import HotelMalla from "../assets/hotelmalla 1.jpg";
import LakesideStay from "../assets/lakeside stay 1.jpg";
import Fishtail from "../assets/fishtail lodge 1.jpg";
import KarmaVilla from "../assets/karma villa 1.jpg";

const Allhotels = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const checkIn = queryParams.get('checkIn');
  const checkOut = queryParams.get('checkOut');
  const rooms = queryParams.get('rooms');
  const guests = queryParams.get('guests');

  return (
    <div>
      <Navbar />
      <div className='hotel-main'>
        {/* Hotel 1 */}
        <div className="stay">
          <img src={HotelMalla} alt="Hotel Malla" />
          <div className="stay-info">
            <h2>Hotel Malla</h2>
            <p><span className="badge">Wonderful</span> 200 Reviews</p>
            <p>⭐⭐⭐⭐⭐ <i className="fas fa-star"></i></p>
            <p>Rs. 28,000 <span className="discount">Rs. 32,000</span></p>
            <p><i className="fas fa-location-pin"></i> 3.4 km from Airport</p>
            <p className="limited">Only 2 left at this Price</p>
            <div className="viewmore">
              <Link to={`/Hotels/HotelMalla?checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`}>
                View More
              </Link>
            </div>
          </div>
        </div>

        {/* Hotel 2 */}
        <div className="stay">
          <img src={Fishtail} alt="Fishtail Guest House" />
          <div className="stay-info">
            <h2>Fishtail Guest House</h2>
            <p><span className="badge">Good</span> 150 Reviews</p>
            <p>⭐⭐⭐⭐ <i className="fas fa-star"></i></p>
            <p>Rs.1,500 <span className="discount">Rs. 2,200</span></p>
            <p><i className="fas fa-location-pin"></i> 2.3 km from Lakeside</p>
            <div className="viewmore">
              <Link to={`/Hotels/Fishtail?checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`}>
                View More
              </Link>
            </div>
          </div>
        </div>

        {/* Hotel 3 */}
        <div className="stay">
          <img src={LakesideStay} alt="Lakeside Stay" />
          <div className="stay-info">
            <h2>Lakeside Stay</h2>
            <p><span className="badge">Excellent</span> 350 Reviews</p>
            <p>⭐⭐⭐⭐ <i className="fas fa-star"></i></p>
            <p>Rs. 4,500 <span className="discount">Rs. 5,500</span></p>
            <p><i className="fas fa-location-pin"></i> 1.6 km from Lakeside</p>
            <p className="limited">Only 5 left at this Price</p>
            <div className="viewmore">
              <Link to={`/Hotels/LakesideStay?checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`}>
                View More
              </Link>
            </div>
          </div>
        </div>

        {/* Hotel 4 */}
        <div className="stay">
          <img src={KarmaVilla} alt="Karma Villa" />
          <div className="stay-info">
            <h2>Karma Villa</h2>
            <p><span className="badge">Wonderful</span> 100 Reviews</p>
            <p>⭐⭐⭐⭐⭐ <i className="fas fa-star"></i></p>
            <p>Rs. 18,000 <span className="discount">Rs. 22,000</span></p>
            <p><i className="fas fa-location-pin"></i> 5.9 km from Airport</p>
            <p className="limited">Only 4 left at this Price</p>
            <div className="viewmore">
              <Link to={`/Hotels/KarmaVilla?checkIn=${checkIn}&checkOut=${checkOut}&rooms=${rooms}&guests=${guests}`}>
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Allhotels;
