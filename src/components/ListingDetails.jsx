import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

export function ListingDetails() {
  const { listingId } = useParams();
  const { listings } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(5);
  const [create, setCreate] = useState(false);

  const singleListing = listings.find(
    (listing) => listing.id.toString() === listingId
  );

  const CreateReviewForm = (e) => {};

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
            <h1>{ReviewListing}</h1>
            <button onClick={() => {}}></button>
            <button></button>
          </div>
        </div>
      );
    }
  };

  return <RenderListing />;
}
