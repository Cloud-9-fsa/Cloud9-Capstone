import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import { createReview } from "../apiCalls/createReview";

export function ListingDetails() {
  const { listingId } = useParams();
  const { listings, token, user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5);
  const [create, setCreate] = useState(false);

  const singleListing = listings.find(
    (listing) => listing.id.toString() === listingId
  );

  const handleSubmit = async (listingId, e) => {
    if (token) {
      e.preventDefault();
      const newReview = await createReview(
        listingId,
        user.id,
        user.firstname,
        user.lastname,
        title,
        description,
        rating
      );
      setTitle("");
      setRating("");
      setDescription("");
    } else {
      window.alert("Please Login or Register");
    }
  };

  const handleClick = (e) => {
    setCreate(!create);
  };

  const RenderReviews = () => {
    if (singleListing.reviews) {
      const ReviewListing = singleListing.reviews?.map(
        ({ id, description, rating, title }) => {
          return (
            <div className="singleReview" key={id}>
              <p>title: {title}</p>
              <p>rating:{rating}</p>
              <p>description:{description}</p>
            </div>
          );
        }
      );
    }
  };

  const RenderListing = () => {
    if (singleListing) {
      return (
        <div className="singleListing" key={listingId}>
          <h1>{singleListing.name}</h1>
          <h1>{singleListing.id}</h1>
          <h1>{singleListing.price}</h1>
          <h1>{singleListing.description}</h1>
          <h1>{singleListing.category}</h1>
          <div>
            <RenderReviews />
            <button onClick={(e) => handleClick(e)}>Add Review</button>
          </div>
          {create ? (
            <div className="newReviewForm">
              <h4>Review</h4>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  value={title}
                  type="text"
                  placeholder="title"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                  value={rating}
                  type="number"
                  placeholder="rating"
                  onChange={(e) => setRating(e.target.value)}
                ></input>
                <input
                  value={description}
                  type="text"
                  placeholder="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
                <br></br>
                <button className="reviewSubmit" type="submit">
                  Submit Review
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    }
  };

  return <RenderListing />;
}
