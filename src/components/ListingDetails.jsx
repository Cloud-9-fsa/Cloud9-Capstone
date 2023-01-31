import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import "../style/ListingDetails.css";
import { createOrder } from "../apiCalls/cart/createOrderApi";
import { addListingToOrder } from "../apiCalls/cart/addListingToOrder";
import { getOrder } from "../apiCalls/cart/getOrder";

import { ReviewForm } from "./ReviewForm";

export function ListingDetails() {
  const { listingId } = useParams();
  const { listings, token, user, order, setOrder } = useAuth();

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
          <div className="namepic">
            <h1 className="name1">{singleListing.name}</h1>
            <img className="pic1" src={singleListing.image} />
          </div>
          <div className="info">
            <h1 className="price1">${singleListing.price}</h1>
            <h1 className="price1">{singleListing.description}</h1>
            <h1 className="price1">Category: {singleListing.category}</h1>

            <button
              className="button"
              type="button"
              onClick={async () => {
                if (order.length === 0) {
                  const newOrder = await createOrder(token);
                  setOrder(newOrder);
                }
                addListingToOrder(order.id, id);
                const oldOrder = await getOrder(token);

                setOrder(oldOrder[0]);
              }}
            >
              Add To Cart
            </button>
            <br></br>
            <button
              className="button"
              role="button"
              onClick={() => handleClick()}
            >
              Add Review
            </button>
            <RenderReviews />
          </div>
          {create ? <ReviewForm listingId={listingId} /> : <></>}
        </div>
      );
    }
  };

  return <RenderListing />;
}
