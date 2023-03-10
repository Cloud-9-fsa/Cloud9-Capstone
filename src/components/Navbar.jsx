import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/UseAuth";
import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import Logo from "../assets/Logo.JPG";

const Navbar = () => {
  const { token, setToken, setUser, user, setOrder } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    setUser({});
    setToken("");
    setOrder({});
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
          <NavLink to="Login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/register" className="navbar-link">
            Signup
          </NavLink>
        </>
      );
    }
  };

  const ProfilePage = () => {
    if (localStorage.getItem("token")) {
      return (
        <NavLink to="/Profile">
          <img
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
            alt="profile"
            className="profilepic"
          />
        </NavLink>
      );
    }
  };

  return (
    <nav className="navbar">
      <h1>
        {" "}
        <img
          src={Logo}
          alt="companylogo"
          className="companylogo"
          onClick={() => {
            navigate("/");
          }}
        />{" "}
      </h1>

      {/* <NavLink to="/" className="navbar-link">
        Home
      </NavLink> */}
      <div className="shop">
        <a href="/shop" className="navbar-link2">
          Shop
        </a>
        <div className="shop-dropdown">
          <div className="shop-dropdown-card">
            <a href="/shop/Pet">Pet</a>
          </div>
          <div className="shop-dropdown-card">
            <a href="/shop/Sleep">Sleep</a>
          </div>
          <div className="shop-dropdown-card">
            <a href="/shop/decorative">Decorative</a>
          </div>
          <div className="shop-dropdown-card">
            <a href="/shop/Outdoor">Outdoor</a>
          </div>
          <div className="shop-dropdown-card">
            <a href="/shop/Accessories">Accessories</a>
          </div>
        </div>
      </div>
      <NavLink to="/PillowTalks" className="navbar-link">
        Pillow Talks
      </NavLink>
      <NavLink to="/aboutus" className="navbar-link">
        About Us
      </NavLink>

      <LoginLogout />

      <NavLink to="/Cart" className="cart">
        <img
          src="https://icons-for-free.com/download-icon-checkout+commerce+shopping+cart+icon-1320166580788754282_256.png"
          alt="cart1"
          className="cart2"
        />
      </NavLink>
      <ProfilePage />
    </nav>
  );
};

export default Navbar;
