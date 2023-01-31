import React, { useState } from "react";
import { useAuth } from "../context/UseAuth";
import { Link } from "react-router-dom";
import { createOrder } from "../apiCalls/cart/createOrderApi";
import { addListingToOrder } from "../apiCalls/cart/addListingToOrder";
import { getOrder } from "../apiCalls/cart/getOrder";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteListing } from "../apiCalls/deleteListingAPI";
import { fetchListings } from "../apiCalls/listingsAPI";
import "../styles/Categories.css";
import { updateListing } from "../apiCalls/updateListingAPI";
import { RenderUpdateListing } from "./UpdateListings";


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
        <div>
          <div
            className="AllListings"
            key={id}
            onClick={() => {
              navigate(`/listings/${id}`);
            }}
          >
            <p>{name}</p>
            <img style={{ width: 150, height: 150 }} src={image} />
            {isHot ? (
              <>
                <img
                  style={{ width: 25, height: 25 }}
                  className="fireEmoji"
                  src="https://www.clipartmax.com/png/small/26-260450_fire-emoji-png.png"
                  alt="Fire Emoji Png @clipartmax.com"
                />
                <img
                  style={{ width: 25, height: 25 }}
                  className="fireEmoji"
                  src="https://www.clipartmax.com/png/small/26-260450_fire-emoji-png.png"
                  alt="Fire Emoji Png @clipartmax.com"
                />
                <img
                  style={{ width: 25, height: 25 }}
                  className="fireEmoji"
                  src="https://www.clipartmax.com/png/small/26-260450_fire-emoji-png.png"
                  alt="Fire Emoji Png @clipartmax.com"
                />
              </>
            ) : (
              <></>
            )}

            <p>Price: {price}</p>
          </div>
          <button
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
          {edit? (<RenderUpdateListing/>) : null }
        </div>
      );
    }
  );

  return (
    <div>
      <h1>Welcome To Cloud9</h1>

      <div className="AllListings">{allCategoryListings}</div>

    </div>
  );
};
