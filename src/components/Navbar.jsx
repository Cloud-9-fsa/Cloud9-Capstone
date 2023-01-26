import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/UseAuth";

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
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>

   
     
  

      <LoginLogout/>

      <NavLink to="/Cart" className="cart">
        Cart
      </NavLink>
      <NavLink to="/Article">Article</NavLink>
 <NavLink to="/aboutus">About Us</NavLink>
    </nav>
  );
};

export default Navbar;
