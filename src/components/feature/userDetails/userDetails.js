import React from "react";
import "./userDetails.css";

const UserDetails = () => {
  return (
    <div className="form">
      <form>
        <h4>
          <div className="personaldetails">
            Personal Details:<br></br>
            <label>First Name: </label>
            <input type="text"></input>
            <label>Last Name: </label>
            <input type="text"></input>
            <label>Father Name: </label>
            <input type="text"></input>
            <label>Mother Name: </label>
            <input type="text"></input>
            <label>DOB: </label>
            <input type="date"></input>
          </div>
          <div className="contectdetails">
            Contect Details:<br></br>
            <label>Mobile Number: </label>
            <input type="number"></input>
            <label>Email: </label>
            <input type="Email"></input>
            <label>Aadhar card: </label>
            <input type="text"></input>
            <label>Home Adderase: </label>
            <input type="text"></input>
          </div>
          <div className="Qulification">
            Qualification Details:
            <br></br>
            <label>Higher qulification: </label>
            <input type="text"></input>
            <label>Higher qulification Year: </label>
            <input type="Year"></input>
            <label>Current qulification: </label>
            <input type="text"></input>
            <label>Course Name: </label>
            <input type="text"></input>
            <label>Branch name: </label>
            <input type="text"></input>
          </div>
        </h4>
      </form>
    </div>
  );
};

export default UserDetails;
// First Name: <input type='text'> </input> */}
// Last Name: <input type='text'> </input>
// Father Name: <input type='text'> </input>
// mother Name: <input type='text'> </input>
// Mobile number: <input type='number'> </input>
// Home adderase: <input type='text'> </input>

// DOB: <input type='date'> </input>
// current Qualification: <input type='text'> </input>
// Higher qulification: <input type='text'> </input>
// Course Name: <input type='text'> </input>
// Higher qulification percentage: <input type='text'> </input>
// current qulification percentage: <input type='text'> </input>
