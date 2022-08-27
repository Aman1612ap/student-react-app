
import loader from '../../../assets/images/loading.svg';
import './loader.css';

function Loader({isLoading= false}) {
    return(
        <>
            {isLoading && 
                <div className="loader-container">
                    <div className="loading-wrapper" style={{background:'white'}}>
                        <img src={loader} alt="loading SVG" />
                    </div>
                </div>
            }
        </>
    );
}

export default Loader;