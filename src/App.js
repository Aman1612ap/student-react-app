// import logo from "./logo.svg";
import "./App.css";
import Prenavbar from "./Data/Prenavbar.js";
import Navbar from "./Data/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Data/Home";
import About from "./Data/About";
import Dashboard from "./Data/Dashboard";
//  import Right from "./Data/Right.js";
import Sign from "./Sign.js";
import Signin from "./Signin.js";
import Left from "./Data/Left.js";
import Footer from "./Data/Footer.js";
import Register from "./Data/Register.js";
import AlertPopUp from "./components/common/alertPopUp/AlertPopUp";
// import Slider from "./Data/Slider.js"


function App() {
  return (
    <div>
      <Prenavbar />
      <Navbar />
      <div className="abc">
        <div className="def">
          <Left />
        </div>
        <div className="adjust">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/" element={<Register />}></Route> */}
            <Route path="feature" element={<Register></Register>}></Route>

            <Route path="about" element={<About></About>}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="sign" element={<Sign></Sign>}></Route>
            <Route path="signin" element={<Signin></Signin>}></Route>
          </Routes>
        </div>
      </div>
      <div className="foot">
      {/* <Register /> */}
      <Footer/>
      </div>
      {/* <AlertPopUp/> */}
    </div>
  );
}

export default App;
