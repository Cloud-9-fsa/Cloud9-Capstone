import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage["token"] || "");
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [listings, setListings] = useState([]);





  //   useEffect(() => {
  //     setToken(localStorage["token"] || "");
  //     const getUser = async () => {
  //       const info = await getUserInfo();
  //       setUser(info);
  //     };
  //     getUser();
  //   }, [shouldUpdate]);

  //   const updateAuthStatus = () => {
  //     setShouldUpdate(!shouldUpdate);
  //   };
  //   const logout = () => {
  //     localStorage.clear;
  //     updateAuthStatus();
  //   };

  const providerValue = {
    user,
    setUser,
    token,
    setToken,
    login,
    listings,
    setListings
    // add your state here
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}
