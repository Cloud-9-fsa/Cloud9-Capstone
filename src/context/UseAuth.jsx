import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const {
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
  } = useContext(AuthContext);

  return {
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
};
