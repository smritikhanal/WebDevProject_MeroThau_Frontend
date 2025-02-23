import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../Styles/ReviewFeedback.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ReviewFeedback = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", { rating, review });
    navigate("/");
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <>
      <Navbar />
      <div className="review-feedback-page">
        <div className="review-feedback-container">
          <h2>Review & Feedback</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <label>Rating:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`fas fa-star ${star <= rating ? "gold" : "gray"}`}
                  onClick={() => handleStarClick(star)}
                ></i>
              ))}
            </div>

            <label>Feedback:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="review-textarea"
              placeholder="Write your feedback here..."
              required
            ></textarea>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReviewFeedback;
