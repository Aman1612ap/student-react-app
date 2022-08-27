import React, { Component } from "react";
import "./userDetails.css";

import * as dataService from '../../../services/data.service';
import { withService } from "../../common/wrapper/commonWapper";
import Loader from "../../common/loader/loader";
import AlertPopUp from "../../common/alertPopUp/AlertPopUp";

class UserDetails extends Component {

  constructor() {
    super();
    this.state = {
      isEditMode: false,
      isDataFetched: false,
      isLoading: false,
      popUpData: null,
      data:{
          aadhar: '',
          firstName: '',
          lastName:'', 
          fatherName:'', 
          motherName:'', 
          dob:'', 
          currentQualification:'', 
          higherQualification: '', 
          higherQualificationYear:'',
          currentCourseName:'', 
          mobileNumber:'',
          homeAddress:''
      }
    }
  }

  async componentDidMount() {
      const params = this.props.location;
      if (params?.state?.data?.aadhar) {
        const userDetailsRes = await dataService.getUserData(params.state.data.aadhar);
        if(userDetailsRes.status == 'success') {
         this.setUserDetails(userDetailsRes.data);
         this.setState((prevState) => {return {...prevState, isDataFetched: true}});
        } else {
          this.setState({...this.state, data:{...this.state.data, aadhar: params.state.data.aadhar}});
        }
      } else {
        setTimeout(()=> this.props.navigate('/login'), 0);
      }
   }


   async setUserDetails(data) {
    const dataKeys = Object.keys(data);
    dataKeys.map(key=> {
      // if(key== 'dob') {
      //   data[key] = moment().format('YYYY-MM-DD');
      // }
      this.setState((prevState)=>{return {...prevState, data:{...prevState.data, [key]: data[key]}}})});
   }

   closePopUp = (status) => {
    if(status=='success') {
      this.setState({...this.state, popUpData: null, isDataFetched: true, isEditMode: true});
    } else {
      this.setState((prevState) => {return {...this.state, popUpData: null, isDataFetched: prevState.isDataFetched, isEditMode: prevState.isEditMode}});
    }
  }

  submit = async () => {
    var apiRes= null;
    const mode  = this.state.isDataFetched && this.state.isEditMode ? 'update' : 'save';
    console.log(this.state.data, mode);
    this.setState({...this.state, isLoading: true});
    if(mode=='save') {
      apiRes = await dataService.setUserData(this.state.data)
    } else {
      apiRes = await dataService.updateUserData(this.state.data.aadhar, this.state.data)
    }

    if(apiRes.status= "success") {
      const data ={
        headerObj: {text: mode=='save'?'Data saved successfully.': 'Data updated successfully.', className:'sucsess'},
        msgObj: {text: '', className:''},
        btnObj: {
              primary: {text:'close', className:'', func: ()=>this.closePopUp('success')}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    } else {
      const data ={
        headerObj: {text:mode=='save'?'Data save failed.': 'Data updatation failed.', className:'failed'},
        msgObj: {text: apiRes.error, className:''},
        btnObj: {
              primary: {text:'Try again.', className:'', func: ()=>this.closePopUp('fail')}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    }
  }


  handleChange = (e) => {
    this.setState({...this.state, data:{...this.state.data,[e.target.name]: e.target.value}})
  }

  shouldDisabled(fieldName) {
    const editableField = ['higherQualification','higherQualificationYear', 'currentQualification', 'currentCourseName'];
    // if(this.state.isDataFetched && !this.state.isEditMode && !editableField.includes(fieldName)) {
    if(this.state.isDataFetched) {
      return true;
    }
  }


  editDetails() {
    this.setState({...this.state, 'isEditMode': true});
  }

  render() {
    return (
    <>
      <div className="form">
        <form>
          <h4>
            <div className="personaldetails">
              Personal Details:<br></br>
              <label>First Name: </label>
              <input type="text" name="firstName" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.firstName} disabled={this.shouldDisabled('firstName')}/>
              <label>Last Name: </label>
              <input type="text" name="lastName" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.lastName} disabled={this.shouldDisabled('lastName')}/>
              <label>Father Name: </label>
              <input type="text" name="fatherName" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.fatherName} disabled={this.shouldDisabled('fatherName')}/>
              <label>Mother Name: </label>
              <input type="text" name="motherName" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.motherName} disabled={this.shouldDisabled('motherName')}/>
              <label>DOB: </label>
              <input type="date" name="dob" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.dob} disabled={this.shouldDisabled('dob')}/>
            </div>
            <div className="contectdetails">
              Contect Details:<br></br>
              <label>Mobile Number: </label>
              <input type="number" name="mobileNumber" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.mobileNumber} disabled={this.shouldDisabled('mobileNumber')}/>
              {/* <label>Email: </label>
              <input type="Email" name="firstName" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.aadhar}></input> */}
              <label>Aadhar card: </label>
              <input type="text" name="aadhar" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.aadhar} disabled={true}/>
              <label>Home Adderase: </label>
              <input type="text" name="homeAddress" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.homeAddress} disabled={this.shouldDisabled('homeAddress')}/>
            </div>
            <div className="Qulification">
              Qualification Details:
              <br></br>
              <label>Higher qulification: </label>
              <input type="text" name="higherQualification" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.higherQualification}/>
              <label>Higher qulification Year: </label>
              <input type="Year" name="higherQualificationYear" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.higherQualificationYear}/>
              <label>Current qulification: </label>
              <input type="text" name="currentQualification" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.currentQualification}/>
              <label>Course Name: </label>
              <input type="text" name="currentCourseName" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.currentCourseName}/>
              {/* <label>Branch name: </label>
              <input type="text" name="aadhar" 
              onChange={(e)=> this.handleChange(e)} value={this.state.data.aadhar}></input> */}
            </div>
          </h4>
          {!this.state.isEditMode && !this.state.isDataFetched && <button type="button" onClick={()=>this.submit()}>Save details</button>}
          {this.state.isEditMode && <button type="button" onClick={()=> this.submit()}>Update Details</button>}

          {!this.state.isEditMode && this.state.isDataFetched && <button type="button" onClick={()=>this.editDetails()}>Edit details</button> }
        </form>
      </div>
      {this.state.isLoading && <Loader isLoading={this.state.isLoading}/>}
      {this.state.popUpData && <AlertPopUp {...this.state.popUpData}/>}
    </>
  );
  }
};

export default withService(UserDetails);
