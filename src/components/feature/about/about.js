import React from 'react';

const About = () => {
  const headerContainer={
    color: "black"
  }
  return (
    <div style={headerContainer}>
      <p>
        <h1>About the wabsite.</h1>
        <h2>This wabsite work on following three steps.</h2>
        <h3>1. user register itself.</h3>

        <h3>2. After succesfully register user should to be fill the application form where same imformation are needed.
        like Name, DOB,Mobile number, Qulification etc. </h3>

        <h3> 3.After filled the form user can update their profile including only Qulification.</h3>
        <h2>Note:-when ever user go for interview in a organization.then 
          organizaton need to conforn whatever user 
          are varify or not on the basis of their qulification with Aadhar Number.
        </h2>
      </p>
    </div>
  )
}

export default About;