import React, { useState } from "react";
import { useAuth } from "../context/UseAuth";
import { createReview } from "../apiCalls/createReview";
import { fetchListings } from "../apiCalls/listingsAPI";
import "../style/ListingDetails.css";

export const ReviewForm = ({ listingId }) => {
  const { user, token, listings, setListings } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    if (token) {
      e.preventDefault();

      await createReview(
        listingId,
        user.id,
        user.firstname,
        user.lastname,
        title,
        description,
        rating,
        token
      );
      const data = await fetchListings();
      setListings(data);

      setTitle("");
      setRating("");
      setDescription("");
    } else {
      window.alert("Please Login or Register");
    }
  };

  return (
    <div>
      <div className="newReviewForm">
        <h4>Add Your Review</h4>
        <form className="reviewForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            value={title}
            type="text"
            placeholder="Review Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <input
            value={rating}
            type="number"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            min={1}
            max={5}
            required
          ></input>
          <input
            value={description}
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
          <br></br>
          <button className="reviewSubmit" type="submit">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
