import React, { useState, useEffect, createContext } from "react";
import { getOrder } from "../apiCalls/cart/getOrder";
import { getUserInfo } from "../apiCalls/getUserInfoAPI";
import { fetchListings } from "../apiCalls/listingsAPI";
import { getOrderById } from "../apiCalls/cart/getOrderNotLogged";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage["token"] || "");
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [listings, setListings] = useState([]);
  const [order, setOrder] = useState({});
  const [categoryListings, setCategoryListings] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  useEffect(() => {
    setToken(localStorage["token"] || "");
    const getUser = async () => {
      const info = await getUserInfo(token);
      if (info.id) {
        setUser(info);
      }
    };
    getUser();
    const orders = async () => {
      if (token) {
        const oldOrder = await getOrder(token);

        setOrder(oldOrder[0]);
      } else if (localStorage.getItem("orderId") != "undefined") {
        const data = await getOrderById(
          Number(localStorage.getItem("orderId"))
        );
        setOrder(data);
      }
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
    firstname,
    setFirstname,
    lastname,
    setLastname,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    zipcode,
    setZipcode,
    country,
    setCountry,
    cardName,
    setCardName,
    cardExpiry,
    setCardExpiry,
    cardCVV,
    setCardCVV,
    cardNumber,
    setCardNumber,

    // add your state here
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}
