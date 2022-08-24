import React from "react";
import "../Data/Prenavbar.css";
import { Link } from "react-router-dom";

const Prenavbar = () => {
  return (
    <div className="prenavbar">
        <div>
            <a href="/">STudent varification</a> <span>|</span>
            <a href="/">Get On Mobile</a> <span>|</span>
            {/* <a href="/">Feature</a> <span></span> */}
            <Link to="/feature" className="navlink" >Feature</Link>  <span> </span>

        </div>
        <div>
        <Link to="/sign" className="navlink" >Sign up</Link>  <span> </span>
        <Link to="/signin" className="navlink" >Sign in</Link>  <span> </span>

        {/* <a href="/">Sign Up</a> <span>|</span> */}
        {/* <a href="/">Sign in</a> <span>|</span> */}
        <a href="/">Help</a> <span>|</span>
        </div>
    </div>
  )
}

export default Prenavbar