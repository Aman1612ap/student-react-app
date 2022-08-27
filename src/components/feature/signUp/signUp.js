import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import "./signUp.css";
import {signUp} from '../../../services/auth.service';
import Loader from "../../common/loader/loader";
import AlertPopUp from "../../common/alertPopUp/AlertPopUp";

class SignUp extends Component {
  constructor() {
    super();
    this.state= {
    isLoading: null,
    popUpData: null,
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

closePopUp = () => {
  this.setState({...this.state, popUpData: null});
}

redirect(path) {
  // this.props.history.push(path);
  return <Navigate to={path} />
}

 submit = async (e) => {
  e.preventDefault();
  console.log(this.state);
  this.setState({...this.state, isLoading: true});
    const res = await signUp({aadhar: this.state.aadhar, email: this.state.email});
    if (res.status== 'success')  {
          const data ={
            headerObj: {text:'Sign up successfully.', className:'sucsess'},
            msgObj: {text: 'Press below button to complete your profile.', className:''},
            btnObj: {
                  primary: {text:'Complete Profile', className:'', func: ()=>this.redirect('/userDetails')}
              }
          };
          this.setState({...this.state, isLoading: false, popUpData:data});
    } else {
      const data ={
        headerObj: {text: res.reseon == 'alreadyRegistred'? 'User Already Exist.' : 'Signup Failed', className:'failed'},
        msgObj: {text: res.reseon == 'alreadyRegistred'? 'Please Login and continue.' : 'Technical Error.', className:''},
        btnObj: {
              primary: {text:res.reseon == 'alreadyRegistred'? 'Login': 'close', className:'', func: res.reseon == 'alreadyRegistred'? ()=>this.redirect('/login'): this.closePopUp}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    }

} 

  render() {
   return (
    <>
    <div className="signup">
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

      {this.state.isLoading && <Loader isLoading={this.state.isLoading}/>}
      {this.state.popUpData && <AlertPopUp {...this.state.popUpData}/>}
    </>
   )
  };
};

export default SignUp;
