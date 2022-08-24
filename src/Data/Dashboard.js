import React, { useState } from 'react'
import "./Dashboard.css";
import {verifyUser} from '../services/auth.service';
import AlertPopUp from '../components/common/alertPopUp/AlertPopUp';

const Dashboard = () => {

  const [textInput, setTextInput] = React.useState('');
  const [isLoading, setLoading] = useState(false);
  const [isVerification, setVerification] = useState(false);
  const [popUpData, setPopUpData] = useState(null);

  const verify = async () => {
    setLoading(true);
    const res = await verifyUser({aadhar: textInput});
    setLoading(false);
    setVerification(true);
    if (res.status== 'success' && res.verify == 'success')  {
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
        heading: 'Verification failed',
        status: false,
      }
      setPopUpData(data);
    }
  }

  const hidePopUp = ()=> {
    setLoading(false);
    setVerification(false);
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
      {isLoading || isVerification ?
        <AlertPopUp isLoader={isLoading} isVerification={isVerification} data={popUpData} onClosehandler={hidePopUp}/> : null
      } 
    </div>
  )
}   

export default Dashboard