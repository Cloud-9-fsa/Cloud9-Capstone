import React, { useEffect } from "react";
import { fetchListings } from "../apiCalls/listingsAPI";
import { useAuth } from "../context/UseAuth";
import FireEmoji from "../assets/FireEmoji.png";
import { Link } from "react-router-dom";

export const Shop = () => {
  const { listings, setListings } = useAuth();

  useEffect(() => {
    const getAllListings = async () => {
      const data = await fetchListings();
      setListings(data);
      //   console.log("THESE ARE MY Listings", data)
    };
    getAllListings();
  }, []);

  console.log("here are the listings:", listings);
  const allCategoryListings = listings?.map(
    ({ id, category, name, isHot, price, image, description }) => {
      return (
        <div className="AllListings" key={id}>
          <p>Category: {category}</p>
          <p>Name: {name}</p>
          <img style={{ width: 150, height: 150 }} src={image} />
          {isHot ? (
            <div>
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
            </div>
          ) : (
            <></>
          )}
          <p>Price: {price}</p>
          <button>Add To Cart</button>
        </div>
      );
    }
  );

  return (
    <div>
      <h1>Welcome To Cloud9</h1>
      <div className="AllListings">{allCategoryListings}</div>
      <div>
        <Link to="/Pet Pillows">Pet Pillows</Link>
        <Link to="/Sleep">Sleep</Link>
        <Link to="/Decorative">Decorative</Link>
        <Link to="/Outdoor">Outdoor</Link>
        <Link to="/Accessories">Accessories</Link>
      </div>
    </div>
  );
};
