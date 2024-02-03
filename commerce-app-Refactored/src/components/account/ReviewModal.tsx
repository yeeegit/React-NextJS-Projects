import React, { useState, ChangeEvent } from "react";
import "../../styles/accountStyles/account.css";

interface Props {
  closeModal: () => void;
}

const ReviewModal: React.FC<Props> = ({ closeModal }) => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Review Text:", reviewText);
    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <h3>Review This Product</h3>
        <div>
          <label>Rating: </label>
          <input
            type="range"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
          {rating}
        </div>
        <div>
          <label>Review Text: </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default ReviewModal;
