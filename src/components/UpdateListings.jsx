import React, { useState } from "react";
import { useAuth } from "../context/UseAuth";
import { updateListing } from "../apiCalls/updateListingAPI";
import { fetchListings } from "../apiCalls/listingsAPI";
import "../style/ListingDetails.css";

export const RenderUpdateListing = ({ listingId }) => {
  const { user, token, setListings } = useAuth();
  const [isHot, setIsHot] = useState(false);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async () => {
    if (user.isAdmin) {
      await updateListing({
        listingId,
        token,
        isHot,
        image,
        image2,
        image3,
        image4,
        image5,
        name,
        description,
        category,
        price,
        stock,
      });
      setName("");
      setDescription("");
      setCategory("");
      setPrice("");
      setStock("");
      setImage("");
      setImage2("");
      setImage3("");
      setImage4("");
      setImage5("");
      setIsHot(false);
      const data = await fetchListings();
      setListings(data);
    }
  };
  return (
    <div>
      <div className="updateListingForm">
        <form className="listingForm">
          <h4>Update Listing</h4>
          <input
            value={name}
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <input
            value={description}
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
          <input
            value={category}
            type="text"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
            required
          ></input>
          <input
            value={price}
            type="number"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            required
          ></input>
          <input
            value={stock}
            type="number"
            placeholder="stock"
            onChange={(e) => setStock(e.target.value)}
            required
          ></input>
          <input
            value={image}
            type="text"
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
            required
          ></input>
          <input
            value={image2}
            type="text"
            placeholder="image2"
            onChange={(e) => setImage2(e.target.value)}
          ></input>
          <input
            value={image3}
            type="text"
            placeholder="image3"
            onChange={(e) => setImage3(e.target.value)}
          ></input>
          <input
            value={image4}
            type="text"
            placeholder="image4"
            onChange={(e) => setImage4(e.target.value)}
          ></input>
          <input
            value={image5}
            type="text"
            placeholder="image5"
            onChange={(e) => setImage5(e.target.value)}
          ></input>
          <label>Hot Item?</label>
          <input
            value={isHot}
            type="checkbox"
            placeholder="isHot"
            onChange={(e) => setIsHot(!isHot)}
          ></input>
          <br></br>
          <button
            className="listingSubmit"
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit Listing
          </button>
        </form>
      </div>
    </div>
  );
};
