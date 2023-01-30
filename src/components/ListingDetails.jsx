import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

import { ReviewForm } from "./ReviewForm";

export function ListingDetails() {
  const { listingId } = useParams();
  const { listings, token, user } = useAuth();

  const [create, setCreate] = useState(false);

  const singleListing = listings.find(
    (listing) => listing.id.toString() === listingId
  );

  const handleClick = () => {
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
      return ReviewListing;
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
            <button onClick={() => handleClick()}>Add Review</button>
          </div>
          {create ? <ReviewForm listingId={listingId} /> : <></>}
        </div>
      );
    }
  };

  return <RenderListing />;
}
