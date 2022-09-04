import React from "react";
import "./prenavbar.css";
import { Link } from "react-router-dom";

const Prenavbar = () => {
  return (
    <div className="prenavbar">
        <div>
            <a href="/">Student verification</a> <span>|</span>
            <a href="/">Get On Mobile</a> <span>|</span>
            {/* <a href="/">Feature</a> <span></span> */}
            <Link to="/verify" className="navlink" >Feature</Link>  <span> </span>

        </div>
        <div>
        <Link to="/signUp" className="navlink" >Sign up</Link>  <span> </span>
        <Link to="/login" className="navlink" >Login</Link>  <span> </span>
        <Link to="/help" className="navlink" >Contact</Link>  <span> </span>

        {/* <a href="/">Help</a> <span>|</span> */}
        </div>
    </div>
  )
}

export default Prenavbar