import React, { useState } from "react";
import { useAuth } from "../context/UseAuth";
import { useNavigate } from "react-router-dom";
import { deleteListing } from "../apiCalls/deleteListingAPI";
import "../style/Categories.css";
import flame from "../assets/flame.png";

export const AllListings = () => {
  const { listings, order, setOrder, token, user, setListings } = useAuth();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  const allListings = listings?.map(
    ({ id, category, name, isHot, price, image, description }) => {
      return (
        <div
          onClick={() => {
            navigate(`/listings/${id}`);
          }}
          className="ListingBox"
          key={id}
        >
          <img
            className="listingIMG"
            style={{ width: 300, height: 300 }}
            src={image}
          />
          <div className="SingleListings" key={id}>
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

          {user.isAdmin ? (
            <div className="adminbuttons">
              <button
                onClick={async (e) => {
                  e.stopPropagation();
                  await deleteListing(id, token);
                  const data = listings?.filter((listing) => listing.id !== id);
                  setListings(data);
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    }
  );

  return (
    <div>
      <div className="AllListings">{allListings}</div>
    </div>
  );
};
