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

    // add your state here
  };
};
