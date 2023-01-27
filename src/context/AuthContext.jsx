import React, { useState, useEffect, createContext } from "react";
import { createOrder } from "../apiCalls/cart/createOrderApi";
import { getOrder } from "../apiCalls/cart/getOrder";
import { getUserInfo } from "../apiCalls/getUserInfoAPI";
import { fetchListings } from "../apiCalls/listingsAPI";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage["token"] || "");
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [listings, setListings] = useState([]);
  const [order, setOrder] = useState({});
  const [categoryListings, setCategoryListings] = useState([]);

  useEffect(() => {
    setToken(localStorage["token"] || "");
    const getUser = async () => {
      const info = await getUserInfo(token);
      setUser(info);
    };
    getUser();
    const orders = async () => {
      const oldOrder = await getOrder(token);

      setOrder(oldOrder[0]);
    };
    orders();
    const getAllListings = async () => {
      const data = await fetchListings();
      setListings(data);
    };
    getAllListings();
  }, []);

  const providerValue = {
    user,
    setUser,
    token,
    setToken,
    login,
    listings,
    setListings,
    order,
    setOrder,
    categoryListings,
    setCategoryListings,

    // add your state here
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}
