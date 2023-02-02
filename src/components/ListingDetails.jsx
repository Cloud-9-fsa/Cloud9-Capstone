import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import "../style/ListingDetails.css";
import { createOrder } from "../apiCalls/cart/createOrderAPI";
import { addListingToOrder } from "../apiCalls/cart/addListingToOrder";
import { getOrder } from "../apiCalls/cart/getOrder";
import { RenderUpdateListing } from "./UpdateListings";

import { ReviewForm } from "./ReviewForm";
import { createOrderNotLogged } from "../apiCalls/cart/createOrderNotLoggedInApi";
import { getOrderById } from "../apiCalls/cart/getOrderNotLogged";
import { ContactPageSharp } from "@mui/icons-material";

export function ListingDetails() {
  const { listingId } = useParams();
  const { listings, token, user, order, setOrder } = useAuth();
  const [edit, setEdit] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [create, setCreate] = useState(false);

  console.log(listings);
  const singleListing = listings.find(
    (listing) => listing.id.toString() === listingId
  );

  const handleClick = () => {
    setCreate(!create);
  };

  const RenderReviews = () => {
    if (singleListing.reviews) {
      const ReviewListing = singleListing.reviews.map(
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
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              placeholder="1"
              onChange={async (e) => {
                setQuantity(e.target.value);
              }}
              min="1"
            />
            <button
              className="button"
              type="button"
              onClick={async () => {
                if (token) {
                  const data = await addListingToOrder(
                    order.id,
                    singleListing.id,
                    Number(quantity)
                  );
                  data;
                  if (data.error) {
                    alert(data.message);
                  }
                  const oldOrder = await getOrder(token);
                  setOrder(oldOrder[0]);
                } else {
                  if (!order.length) {
                    const newOrder = await createOrderNotLogged();

                    setOrder(newOrder);
                    localStorage.setItem("orderId", newOrder[0].id);
                    await addListingToOrder(
                      Number(localStorage.getItem("orderId")),
                      singleListing.id,
                      Number(quantity)
                    );
                  } else {
                    await addListingToOrder(
                      Number(localStorage.getItem("orderId")),
                      singleListing.id,
                      Number(quantity)
                    );
                    const data = await getOrderById(
                      Number(localStorage.getItem("orderId"))
                    );
                    setOrder(data);
                  }
                }
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

          {user.isAdmin ? (
            <button
              onClick={async () => {
                setEdit(!edit);
              }}
              type="edit"
            >
              Edit
            </button>
          ) : (
            <></>
          )}
          {edit ? <RenderUpdateListing listingId={listingId} /> : null}
        </div>
      );
    }
  };

  return <RenderListing />;
}
