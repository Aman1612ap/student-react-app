import React, { useState } from 'react'
import "./verify.css";
import {verifyUser} from '../../../services/auth.service';
import AlertPopUp from '../../common/alertPopUp/AlertPopUp';
import Loader from '../../common/loader/loader';

const Verify = () => {

  const [textInput, setTextInput] = React.useState('');
  const [isLoading, setLoading] = useState(null);
  const [popUpData, setPopUpData] = useState(null);

  const verify = async () => {
    setLoading(true);
    const res = await verifyUser({aadhar: textInput});
    if (res.status== 'success' )  {
      const data = {
        headerObj: {text: res.verificationStatus == 1 ? 'Verification Success': res.verificationStatus == 0 ? 'Verification failed.': 'Verification is in progress.', className:'sucsess'},
        msgObj: {text: res.verificationStatus == 1 ? res.data.enrollNumber : 'Please contact to admin.', className:''},
        btnObj: {
              primary: {text:'close', className:'', func: hidePopUp}
          }
      };
      setLoading(false);
      setPopUpData(data);
    } else {

      const data = {
        headerObj: {text:'Verification failed', className:'failed'},
          msgObj: {text: 'Enter valid identity data.', className:''},
          btnObj: {
              primary: {text:'Try again.', className:'info', func: hidePopUp}
          }
        };
      setLoading(false);
      setPopUpData(data);
    }
  }

  const hidePopUp = ()=> {
    setLoading(false);
    setPopUpData(null);
  }

  const handleChange = (event) => {
    setTextInput(event.target.value);
  }


  return (
    <div className='dash1'>
      <div className='vari'>Varification
      </div>
      
      <div className='vari1'>
      <label>Aadhar no :</label>
      <input onChange={handleChange} type="text" placeholder='Aadhar number' ></input>
      {/* <label>Name :</label><input type="text"placeholder='Enter name'></input> */}
      <button onClick={verify}>Check</button>
      </div>
      {isLoading && <Loader isLoading={isLoading}/>}
      {popUpData && <AlertPopUp {...popUpData}/>} 
    </div>
  )
}   

export default Verify;