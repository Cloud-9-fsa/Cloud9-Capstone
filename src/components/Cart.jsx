import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/UseAuth";
import { editOrder } from "../apiCalls/cart/editOrderQuantity";
import { deleteListingFromOrder } from "../apiCalls/cart/deleteListingFromOrder";
import { getOrder } from "../apiCalls/cart/getOrder";

import "../style/Cart.css";

export const Cart = () => {
  const { order, user, token, setOrder } = useAuth();
  const navigate = useNavigate();

  const deleteListing = async (listingId, orderId) => {
    await deleteListingFromOrder(listingId, orderId);
  };
  console.log(order);
  if (order && order.listings && order.listings.length) {
    const CartListings = order.listings.map((listing) => {
      return (
        <div className="cartForm" key={listing.id}>
          <div className="upperForm">
            <div className="text1">
              <h1>{listing.name}</h1>
              <h1>Price: ${listing.price}.00</h1>
              <div className="descript">
                <h1>{listing.description}</h1>
              </div>
            </div>
            <img className="theimage" src={listing.image} />

            <div className="quantityBar">
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
              <br></br>
              {/* <div className="buttonCart"> */}
              <button
                className="button"
                onClick={async () => {
                  console.log("hi");
                  await deleteListing(listing.id, order.id);
                  const oldOrder = await getOrder(token);
                  setOrder(oldOrder[0]);
                }}
              >
                Remove From Cart
              </button>
              <br></br>
              {/* </div> */}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="mainDiv">
        <h1>
          You have {order.listings.length} items in your cart , {user.firstname}
          !
        </h1>
        {CartListings}
        <h1>Your total is: ${order.total}.00</h1>
        <button
          className="button"
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
};
