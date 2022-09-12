import React from 'react'
import "./home.css"

const Home = () => {

  return (
    <div className='home'>
      <h1>One Point Student verification:</h1>
      <div className='show'>
      <img src="http://www.hcpcollege.in/assets/img/student.jpg" alt='images' width='30%px'/>
      </div>
        <h2 className='align-left'>This is a global plateform where student are verifed by providing some essential information at one point.
        'At one point' means, student's can put there all information at one platform. Once information verified by the admin then the data will be available for 
        organigation for further processes.
        Student can also get the data verification status on the same platform.
        </h2>
      {/* <img src='https://img.freepik.com/premium-photo/asian-cute-girl-with-glasses-holding-book-while-sitting-pile-books-with-city-blue-sky_9083-3228.jpg?w=740'
      alt='ty2'width='1350' height='500'
      /> */}
      {/* <img 
      src='https://img.freepik.com/free-photo/carefree-good-looking-blond-woman-pointing-upper-left-corner-talking-camera-with-broad-satisfied-smile-recommend-awesome-place-great-online-store-standing-white-wall-joyful_176420-36642.jpg?w=740&t=st=1661147160~exp=1661147760~hmac=becd9f818f57150f0faf557ddbc93563041dfe288b5670846a3eefbef3500ecc' 
      alt='ty1'/> */}

    </div>
  )
}

export default Home;