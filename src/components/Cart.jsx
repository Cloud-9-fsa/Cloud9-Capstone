import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/UseAuth";
import { editOrder } from "../apiCalls/cart/editOrderQuantity";
import { deleteListingFromOrder } from "../apiCalls/cart/deleteListingFromOrder";
import { getOrder } from "../apiCalls/cart/getOrder";
import { getOrderById } from "../apiCalls/cart/getOrderNotLogged";

import "../style/Cart.css";

export const Cart = () => {
  const { order, user, token, setOrder } = useAuth();
  const navigate = useNavigate();

  const deleteListing = async (listingId, orderId) => {
    await deleteListingFromOrder(listingId, orderId);
  };

  if (user && user.id) {
    if (order && order.listings && order.listings.length) {
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
                console.log();
                await editOrder(
                  order.id,
                  listing.orderListingId,
                  e.target.value
                );
                const oldOrder = await getOrder(token);
                setOrder(oldOrder[0]);
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
            You have {order.listings.length} items in your cart ,{" "}
            {user.firstname}!
          </h1>
          {CartListings}
          <h1>Your total is: {order.total}</h1>
          <button
            onClick={() => {
              navigate("/cart/checkout");
            }}
          >
            Checkout Here!
          </button>
        </div>
      );
    } else
      return (
        <h1>
          Seems like your Cart is empty. Go add some of our wonderful Cinder
          Blocks® to it!
        </h1>
      );
  } else {
    if (order[0] && order[0].listings && order[0].listings.length) {
      const NotLoggedInCartListings = order[0].listings.map((listing) => {
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
                await editOrder(
                  order[0].id,
                  listing.orderListingId,
                  e.target.value
                );
                const oldOrder = await getOrderById(
                  Number(localStorage.getItem("orderId"))
                );
                setOrder(oldOrder);
              }}
              min="1"
            />
            <button
              onClick={async () => {
                console.log("hi");
                await deleteListing(listing.id, order[0].id);
                const oldOrder = await getOrderById(
                  Number(localStorage.getItem("orderId"))
                );
                setOrder(oldOrder);
              }}
            >
              Remove From Cart
            </button>
          </div>
        );
      });

      return (
        <div>
          <h1>You have {order[0].listings.length} items in your cart !</h1>
          {NotLoggedInCartListings}
          <h1>Your total is: {order[0].total}</h1>
          <button
            onClick={() => {
              navigate("/cart/checkout");
            }}
          >
            Checkout Here!
          </button>
        </div>
      );
    } else
      return (
        <h1>
          Seems like your Cart is empty. Go add some of our wonderful Cinder
          Blocks® to it!
        </h1>
      );
  }
};
