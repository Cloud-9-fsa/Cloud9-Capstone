import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const {
    // add your state here
  } = useContext(AuthContext);

  return {
    // add your state here
  };
};
