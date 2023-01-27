import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import "../style/Navbar.css"


const Navbar = () => {
  const { token, setToken } = useAuth();
  const logout = () => {
    localStorage.clear();
    setToken("");
  };
  const LoginLogout = () => {
    if (localStorage.getItem("token")) {
      return (
        <NavLink
          to="/"
          id="logout"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </NavLink>
      );
    } else {
      return (
        <>
          <NavLink to="Login" id="login">
            {" "}
            Login{" "}
          </NavLink>
          <NavLink to="/register" className="navbar-link">
            Signup
          </NavLink>
        </>
      );
    }
  };

  return (
    <nav className="navbar">
      <h1> CLOUD9</h1>
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>
      <div className="shop">
    <a  href="Shop" className="navbar-link">Shop⌄</a>
    <div className="shop-dropdown">
      <div className="shop-dropdown-card">
        <a href="/Pet">Pet</a>
        </div>
        <div className="shop-dropdown-card">
          <a href="/Sleep">Sleep</a>
          </div>
          <div className="shop-dropdown-card">

        <a href="/Decorative">Decorative</a>
        </div>
        <div className="shop-dropdown-card">

        <a href="/Outdoor">Outdoor</a>
        </div>
        <div className="shop-dropdown-card">

        <a href="/Accessories">Accessories</a>
        </div>
    </div>
</div>

      <LoginLogout />



      <NavLink to="/Article" className="navbar-link" >Article</NavLink>
      <NavLink to="/aboutus"className="navbar-link" >About Us</NavLink>
      <NavLink to="/Cart" className="cart">
      <img
      src="https://icons-for-free.com/download-icon-checkout+commerce+shopping+cart+icon-1320166580788754282_256.png"
      alt="cart1"
      className="cart2"/>
      </NavLink>
    </nav>
  );
};

export default Navbar;
