import React from "react";
import { NavLink } from "react-router-dom";
import {useAuth } from "../context/UseAuth";





const Navbar = () => {
  const { token, setToken } = useAuth();
  const logout = () => {
    localStorage.clear();
    setToken("");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>
      <NavLink to="/login" className="navbar-link">
        Login
      </NavLink>
      <NavLink to="/register" className="navbar-link">
        Signup
      </NavLink>

      {token && (
        <NavLink to="/" className="navbar-link" onClick={logout}>
          Logout
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
