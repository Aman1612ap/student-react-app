import "./AlertPopUp.css";
import loader from '../../../assets/images/loading.svg';
import { useNavigate } from "react-router-dom";

function AlertPopUp({isLoader=false, isVerification=false, data=null, onClosehandler=null}) {
    const navigate = useNavigate();

    function navigateWithClose(redirectTo) {
        if(redirectTo) {
            navigate(redirectTo);
        }
        onClosehandler();
    }

    return (
        <div class="pop-up-container">
          {  isLoader?
          <div class="loading-container" style={{background:'white'}}>
             <img src={loader} alt="loading SVG" />
          </div> :
          <div class="pop-up-content-wrapper">
                <div class="content-heading">
                    {data.heading}
                </div>
                {data?.status && data?.email && <div class="user-data">{data.email}</div>}
                <div class="action-container">
                    <button onClick={()=>data?.status?navigateWithClose(data.redirectTo): navigateWithClose(false)}> {data?.status ?'Great...' : 'Try Agian..'}</button>
                </div>
            </div>
        }

        </div>
    )
}


export default AlertPopUp;