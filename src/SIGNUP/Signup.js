import React from 'react'
import { useEffect } from 'react';
function Signup() {
    useEffect(() => {
        window.otpless = (otplessUser) => {
            alert(JSON.stringify(otplessUser));
            console.log(JSON.stringify(otplessUser),"gffguggg.........");
        };
    }, []);

    return (
        <div className=""></div>
        // <div id="otpless-login-page">      
        // {/* <script type="text/javascript" src="https://otpless.com/auth.js"></script> */}
        //   </div>
        )
}

export default Signup
