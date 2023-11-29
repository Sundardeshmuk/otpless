import React from 'react'

function Signup() {
    useEffect(() => {
        window.otpless = (otplessUser) => {
         alert(JSON.stringify(otplessUser));
        };
       }, []);
                  
      return (
        <div className="App">
        <div id="otpless-login-page">
    <script type="text/javascript" src="https://otpless.com/auth.js"></script>
        </div>
        </div>)
}

export default Signup
