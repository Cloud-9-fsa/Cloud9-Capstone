import React, { useEffect } from "react";
import { createOrder } from "../apiCalls/cart/createOrderApi";
import { getOrder } from "../apiCalls/cart/getOrder";
import { useAuth } from "../context/UseAuth";

export const Cart = () => {
  const { user, order, setOrder, token } = useAuth();
  if (order) {
    const CartListings = order.listings.map((listing) => {
      return (
        <div>
          <h1>{listing.name}</h1>
          <h1>{listing.price}</h1>
          <h1>{listing.quantity}</h1>
        </div>
      );
    });
    return <div>{CartListings}</div>;
  }
};
