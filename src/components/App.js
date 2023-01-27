import React, { useState, useEffect } from "react";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../axios-services";
import "../style/App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import AboutUs from "./AboutUs";
import { Accessories } from "./Accessories";
import { Decorative } from "./Decorative";
import { PetPillows } from "./Pet Pillows";
import { Sleep } from "./Sleep";
import { Outdoor } from "./Outdoor";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Returns from "./returns";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/contact"
          element={
            <>
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/returns"
          element={
            <>
              <Returns />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Shop />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <LogIn /> <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Decorative" element={<Decorative />} />
        <Route path="/PetPillows" element={<PetPillows />} />
        <Route path="/Sleep" element={<Sleep />} />
        <Route path="/Outdoor" element={<Outdoor />} />
      </Routes>
    </div>
  );
};

export default App;
