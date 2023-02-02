import React, { useState, useEffect } from "react";
import { getUserInfo } from "../apiCalls/getUserInfoAPI";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import { RenderNewListing } from "./CreateNewListing";
import { ViewAllUsers } from "./ViewAllUsers";
import { getOrderHistory } from "../apiCalls/cart/orderHistoryAPI";
import "../style/Profile.css";

export const Profile = () => {
  const { user, token } = useAuth();
  const [nav, setNav] = useState("userInfo");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const data = await getOrderHistory(token);
      console.log(data);
      setHistory(data);
    };
    getHistory();
  }, []);

  const RenderOrders = () => {
    if (history) {
      const orderHistory = history.map((order) => {
        return (
          <div className="order" key={order.id}>
            {order.listings.map((listing) => {
              return (
                <div className="listings">
                  <img src={listing.image}></img>
                  <h2> {listing.name}</h2>
                  <h2>Quantity: {listing.quantity}</h2>
                  <h2>Price:{listing.price}</h2>
                  <h2>Item Total:{listing.price * listing.quantity}</h2>
                </div>
              );
            })}
            <h2> Order Total: {order.total}</h2>
          </div>
        );
      });
      return orderHistory;
    }
  };

  const capitalName = (name) => {
    if (!name) {
      return;
    }
    const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return result;
  };
  const UserProfile = () => {
    if (user) {
      return (
        <div>
          <nav className="navbar">
            <button
              onClick={() => {
                setNav("userInfo");
              }}
            >
              User Info
            </button>
            <button
              onClick={() => {
                setNav("orderHistory");
              }}
            >
              Order History
            </button>
            {user.isAdmin ? (
              <>
                <button
                  onClick={() => {
                    setNav("createListing");
                  }}
                >
                  Create Listing
                </button>
                <button
                  onClick={() => {
                    setNav("allUsers");
                  }}
                >
                  View All Users
                </button>
              </>
            ) : null}
          </nav>
          {nav === "userInfo" ? (
            <div>
              <div className="userProfile">
                <div className="name">
                  <label>Name</label>
                  <h1>
                    {capitalName(user.firstname)} {capitalName(user.lastname)}
                  </h1>
                </div>
                <div className="email">
                  <label>Email</label>
                  <h1>{user.email}</h1>
                </div>
                <div className="location">
                  <label>Location</label>
                  <h1>{user.address}</h1>
                </div>
              </div>
            </div>
          ) : null}

          {nav === "orderHistory" && history ? <RenderOrders /> : null}

          {nav === "createListing" ? <RenderNewListing /> : null}
          {nav === "allUsers" ? <ViewAllUsers /> : null}
        </div>
      );
    }
  };
  return <UserProfile />;
};
