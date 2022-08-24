import React, { Component } from "react";
import "./Sign.css";
import {signUp} from './services/auth.service';

class Sign extends Component {
  constructor() {
    super();
    this.state= {
    formData: {fName: null, lName:null, email:null, password:null},
    formError: {fName: null, lName:null, email:null, password:null},
    formValid: false,
    aadhar: '',
    email: ''
  }
}

handleInput = (e) => {
  const fieldName = e.target.name;
  const fielValue = e.target.value;

  let formData = this.state.formData;// {fName: null, lName:null, email:null, password:null},
  let  formError =this.state.formError; // {fName: null, lName:null, email:null, password:null},
  let  formValid= this.state.formValid;// false 
  
  // switch(fieldName) {
  //   case 'fName':
  //     let isValidEmail = fielValue.indexOf('@') >-1;
  //     if(!isValidEmail) {
  //       this.setState()
  //     }
  //     break;
  //   case 'lName':
  //     break;
  //   case 'email':
  //     break;
  //   case 'password':
  //     break;

  // }

  this.setState({...this.state, [fieldName]: fielValue});

}

submit = (e) => {
  e.preventDefault();
  console.log(this.state);

  setLoading(true);
    const res = await signUp({aadhar: this.state.aadhar, email: this.state.email});
    if (res.status== 'success')  {
        if(res.data== 'success') {
          const data = {
            heading: 'Signup Success',
            email: null,
            status: true,
            redirectTo: '/feature',
            redirectTo: null,
          }
          setPopUpData(data);
        }
      const data = {
        heading: 'Verification Success',
        email: res.data,
        status: true,
        // redirectTo: '/feature',
        redirectTo: null,
      }
      setPopUpData(data);
    } else {
      const data = {
        heading: 'Sign failed',
        status: false,
      }
      setPopUpData(data);
    }

}
  render() {
   return <div className="signup">
      <form onSubmit={this.submit}>
        <h3>Sign Up</h3>
        {/* <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name="fName"
            className="form-control"
            placeholder="First name"
            onInput={(e)=> this.handleInput(e)}
          />
          <div className="error" >

          </div>
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
           type="text" 
           name="lName"
           className="form-control" 
           placeholder="Last name" 
           onInput={(e)=> this.handleInput(e)}
           
           />
        </div> */}
        <div className="mb-3">
          <label>Aadhar number</label>
          <input
            type="text"
            name="aadhar"
            className="form-control"
            placeholder="Enter Aadhar"
            value={this.state.aadhar}
            onInput={(e)=> this.handleInput(e)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onInput={(e)=> this.handleInput(e)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  };
};

export default Sign;
