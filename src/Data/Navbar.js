import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <Link to="/" className="navlink">
        Home
      </Link>{" "}
      <span> </span>
      <Link to="/about" className="navlink">
        About
      </Link>{" "}
      <span> </span>
      <Link to="/dashboard" className="navlink">
        Verification
      </Link>{" "}
      <span> </span>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
