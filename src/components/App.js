import React, { useState, useEffect } from "react";
import { getAPIHealth } from "../axios-services";
import "../style/App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import AboutUs from "./AboutUs";
import { ListingDetails } from "./ListingDetails";
import { Categories } from "./Categories";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

  useEffect(() => {
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };
    getAPIStatus();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/listings/:listingId" element={<ListingDetails />} />
        <Route path="/shop/:category" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
