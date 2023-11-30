import React, { useState } from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Helmet } from "react-helmet"

function Signup() {
    const script = document.createElement("script");

    const [bulian,setbulian]=useState(false);
    const [data,setdata]=useState(false);
    useEffect(() => {
        window.otpless = (otplessUser) => {
            window.open('/login');
            // alert(JSON.stringify(otplessUser));
        setbulian(true);
        //     console.log(JSON.stringify(otplessUser),"gffguggg.........");
    };
}, []);   
  
    return (
        <div id="otpless-login-page">
          <Helmet>
            <script   src="https://otpless.com/auth.js"  ></script>
          </Helmet>
        </div>)
}

export default Signup

// import React, { Component } from 'react'
// import DocumentTi
// export default class Signup extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

