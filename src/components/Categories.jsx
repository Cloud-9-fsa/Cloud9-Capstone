import React, { useState } from "react";
import { useAuth } from "../context/UseAuth";
import { Link } from "react-router-dom";
import { createOrder } from "../apiCalls/cart/createOrderAPI";
import { addListingToOrder } from "../apiCalls/cart/addListingToOrder";
import { getOrder } from "../apiCalls/cart/getOrder";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteListing } from "../apiCalls/deleteListingAPI";
import "../style/Categories.css";
import flame from "../assets/flame.png"


export const Categories = () => {
  const { listings, order, setOrder, token, user, setListings } = useAuth();
  const { category } = useParams();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  const capitalName = (name) => {
    const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return result;
  };

  const categoryListings = listings.filter(
    (listing) => listing.category === capitalName(category)
  );

  const allCategoryListings = categoryListings?.map(
    ({ id, category, name, isHot, price, image, description }) => {
      return (
        <div className="ListingBox" key={id}>
          <img className="listingIMG" style={{ width: 300, height: 300 }} src={image} />
          <div
            className="SingleListings"
            key={id}
            onClick={() => {
              navigate(`/listings/${id}`);
            }}
          >
            
            {isHot ? (
              <div className="fireandtitle">
                <p className="listingname" >{name}  </p>
              <div className="firegroup">
                <img
                  className="fireEmoji"
                  src={flame}
                />
                <img
                  className="fireEmoji"
                  src={flame}
                />
               <img
                  className="fireEmoji"
                  src={flame}
                />
                </div>
          
              </div>
            ) : (
            
            <p className="listingname" >{name}</p>
            )}
            
            <p className="pricetag" >${price}</p>
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
            >Edit</button>
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
    <div className="CategoryHeader">
      {category === "Accessories" ? (
        <h1 > Accessories</h1>
      ) : (
        <h1 >{capitalName(category)} Pillows</h1>
      )}

      <div className="AllListings">{allCategoryListings}</div>
    </div>
  );
};
