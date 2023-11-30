import React from 'react'
import { useEffect } from 'react';
function Signup() {
    useEffect(() => {
        window.otpless = (otplessUser) => {
         alert(JSON.stringify(otplessUser));
        };
       }, []);
                  
      return (
        <div className="App">
        <div id="otpless-login-page">
            <h1>asdfef...</h1>
        </div>
    <script type="text/javascript" src="https://otpless.com/auth.js"></script>
        </div>)
}

export default Signup
