import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const {
    token,
    setToken,
    listings,
    setListings

    // add your state here
  } = useContext(AuthContext);

  return {
    token,
    setToken,
    listings,
    setListings
    // add your state here
  };
};
