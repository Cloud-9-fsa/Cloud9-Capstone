import React, { useState } from "react";
import { useAuth } from "../context/UseAuth";
import { Link } from "react-router-dom";

import { addListingToOrder } from "../apiCalls/cart/addListingToOrder";
import { getOrder } from "../apiCalls/cart/getOrder";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteListing } from "../apiCalls/deleteListingAPI";
import { fetchListings } from "../apiCalls/listingsAPI";
import "../style/Categories.css";
import { updateListing } from "../apiCalls/updateListingAPI";
import { RenderUpdateListing } from "./UpdateListings";
import flame from "../assets/flame.png";

export const AllListings = () => {
  const { listings, order, setOrder, token, user, setListings } = useAuth();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  const allListings = listings?.map(
    ({ id, category, name, isHot, price, image, description }) => {
      return (
        <div className="ListingBox" key={id}>
          <img
            onClick={() => {
              navigate(`/listings/${id}`);
            }}
            className="listingIMG"
            style={{ width: 300, height: 300 }}
            src={image}
          />
          <div
            className="SingleListings"
            key={id}
            onClick={() => {
              navigate(`/listings/${id}`);
            }}
          >
            {isHot ? (
              <div className="fireandtitle">
                <p className="listingname">{name} </p>
                <div className="firegroup">
                  <img className="fireEmoji" src={flame} />
                  <img className="fireEmoji" src={flame} />
                  <img className="fireEmoji" src={flame} />
                </div>
              </div>
            ) : (
              <p className="listingname">{name}</p>
            )}

            <p className="pricetag">${price}</p>
          </div>

          <div className="adminbuttons">
            {user.isAdmin ? (
              <button
                onClick={async () => {
                  await deleteListing(id, token);
                  const data = listings?.filter((listing) => listing.id !== id);
                  setListings(data);
                }}
              >
                Delete
              </button>
            ) : (
              <></>
            )}

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
            {edit ? <RenderUpdateListing /> : null}
          </div>
        </div>
      );
    }
  );

  return (
    <div>
      <h1>Welcome To Cloud9</h1>

      <div className="AllListings">{allListings}</div>
    </div>
  );
};
