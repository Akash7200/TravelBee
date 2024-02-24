import React, { useState } from 'react';
import "./reviewform.css";

const ReviewForm = () => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit review to backend
  };

  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <textarea className="textField" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      <button className="submitBtn" type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
