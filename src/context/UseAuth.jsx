import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const {
    token,
    setToken

    // add your state here
  } = useContext(AuthContext);

  return {
    token,
    setToken
    // add your state here
  };
};
