import React, { useEffect } from "react";
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
  useEffect(() => {
    const orders = async () => {
      if (localStorage.getItem("token") || token) {
        const oldOrder = await getOrder(localStorage.getItem("token"));
        setOrder(oldOrder[0]);
      } else if (localStorage.getItem("orderId") != "undefined") {
        const data = await getOrderById(
          Number(localStorage.getItem("orderId"))
        );
        setOrder(data[0]);
      }
    };
    orders();
  }, []);

  if (order && order.listings && order.listings.length) {
    const CartListings = order.listings.map((listing) => {
      return (
        <div className="cartForm" key={listing.id}>
          <div className="upperForm">
            <img className="theimage" src={listing.image} />
            <div className="text1">
              <h1>{listing.name}</h1>
              <h4>${listing.price}.00</h4>
              <h3>{listing.description}</h3>
            </div>

            <div className="quantityBar">
              <label>Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder={listing.quantity}
                onChange={async (e) => {
                  if (e.target.value !== "") {
                    await editOrder(
                      order.id,
                      listing.orderListingId,
                      e.target.value
                    );
                    if (token) {
                      const oldOrder = await getOrder(token);
                      setOrder(oldOrder[0]);
                    } else {
                      const oldOrder = await getOrderById(
                        Number(localStorage.getItem("orderId"))
                      );
                      setOrder(oldOrder[0]);
                    }
                  }
                }}
                min="1"
              />

              <p>Item Total: ${listing.price * listing.quantity}.00</p>
              <button
                className="button2"
                onClick={async () => {
                  await deleteListing(listing.id, order.id);
                  if (token) {
                    const oldOrder = await getOrder(token);
                    setOrder(oldOrder[0]);
                  } else {
                    const oldOrder = await getOrderById(
                      Number(localStorage.getItem("orderId"))
                    );
                    setOrder(oldOrder[0]);
                  }
                }}
              >
                Remove From Cart
              </button>
              <br></br>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="mainDiv">
        <h1>
          You have {order.listings.length} items in your cart
          {user && user.length ? `,${user.firstname}` : null}!
        </h1>
        {CartListings}
        <h1 className="total">Your total is: ${order.total}</h1>
        <button
          className="button2"
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
      <h1 className="emptyCart">
        Seems like your Cart is empty. Go add some of our wonderful Cinder
        Blocks?? to it!
      </h1>
    );
};
