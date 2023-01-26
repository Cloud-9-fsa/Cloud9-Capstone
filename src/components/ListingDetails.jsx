import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

export function ListingDetails() {
  const { listingId } = useParams();
  const { listings } = useAuth();

  const singleListing = listings.find(
    (listing) => listing.id.toString() === listingId
  );

  const RenderListing = () => {
    if (singleListing) {
      return (
        <div>
          <h1>{singleListing.name}</h1>
          <h1>{singleListing.id}</h1>
          <h1>{singleListing.price}</h1>
          <h1>{singleListing.description}</h1>
          <h1>{singleListing.category}</h1>
        </div>
      );
    }
  };

  return <RenderListing />;
}
