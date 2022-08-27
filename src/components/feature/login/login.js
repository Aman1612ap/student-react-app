import React, { useState } from 'react'
import AlertPopUp from '../../common/alertPopUp/AlertPopUp';
import Loader from '../../common/loader/loader';
import * as authService from '../../../services/auth.service';
import { withNavigation } from '../../common/wrapper/navigationWrapper';

const Login = (props) => {

  const [aadhar, setAadhar]= useState('');
  const [isLoading, setLoading]= useState(null);
  const [popUpData, setPopUpData] = useState(null)


  const closePopUp = () => {
    setPopUpData(null);
  }
  
  const redirect =(path) => {
    setPopUpData(null);
    if(path=='/userDetails') {
      props.navigate(path, {state:{ data: {'aadhar':aadhar}}});
    } else {
      props.navigate(path);
    }
  }

  const login = async (e) => {
    e.preventDefault();
    console.log(aadhar);
    setLoading(true);
    const res = await authService.login({aadhar: aadhar});
    if (res.status== 'success')  {
          const data ={
            headerObj: {text:'Login successfully.', className:'sucsess'},
            msgObj: {text: 'Press below button to check your profile.', className:''},
            btnObj: {
                  primary: {text:'Get Profile', className:'', func: () => redirect('/userDetails')}
              }
          };
          setLoading(false);
          setPopUpData(data);

    } else {
      const data ={
        headerObj: {text: 'Login Failed', className:'failed'},
        msgObj: {text: 'Invalid Credential.', className:''},
        btnObj: {
              primary: {text:'Try Login..', className:'', func: closePopUp}
          }
      };
      setLoading(false);
      setPopUpData(data);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name == 'aadhar') {
      setAadhar(value);
    }
  }

  return (
    <>
    <div>
      <form onSubmit={login}>
        <h3>Sign In </h3>
        {/* <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div> */}
        <div className="mb-3">
          <label>Aadhar Number</label>
          <input
            type="text"
            name="aadhar"
            className="form-control"
            placeholder="Enter Aadhar"
            onChange={(e)=> setAadhar(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
    {isLoading && <Loader isLoading={isLoading}/>}
    {popUpData && <AlertPopUp {...popUpData}/>}
    </>
  )
}

export default withNavigation(Login);