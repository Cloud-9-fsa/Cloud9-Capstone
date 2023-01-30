import React from "react";
import { useAuth } from "../context/UseAuth";
import { editOrder } from "../apiCalls/cart/editOrderQuantity";
import { deleteListingFromOrder } from "../apiCalls/cart/deleteListingFromOrder";
import { getOrder } from "../apiCalls/cart/getOrder";
import "../style/Cart.css";

export const Cart = () => {
  const { order, user, token, setOrder } = useAuth();

  const deleteListing = async (listingId, orderId) => {
    await deleteListingFromOrder(listingId, orderId);
  };
  if (user && order && order.listings && order.listings.length) {
    console.log(order);
    const CartListings = order.listings.map((listing) => {
      return (
        <div className="cartForm" key={listing.id}>
          <h1>Name:{listing.name}</h1>
          <h1>Price:{listing.price}</h1>

          <label>Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder={listing.quantity}
            onChange={async (e) => {
              await editOrder(listing.orderListingId, e.target.value);
            }}
            min="1"
          />
          <button
            onClick={async () => {
              console.log("hi");
              await deleteListing(listing.id, order.id);
              const oldOrder = await getOrder(token);
              setOrder(oldOrder[0]);
            }}
          >
            Remove From Cart
          </button>
        </div>
      );
    });

    return (
      <div>
        <h1>
          You have {order.listings.length} items in your cart , {user.firstname}
          !
        </h1>
        {CartListings}
        <h1>Your total is: {order.total}</h1>
      </div>
    );
  }
};
