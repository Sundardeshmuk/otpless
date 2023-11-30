import React from 'react'
import { useEffect } from 'react';
function Signup() {
    useEffect(() => {
        window.otpless = (otplessUser) => {
            alert(JSON.stringify(otplessUser));
            console.log(JSON.stringify(otplessUser),"hiiiiii...");
        };
    }, []);

    return (
        <div id="otpless-login-page">
            <script type="text/javascript" src="https://famous-paletas-99eced.netlify.app" cid="H9NM3R2P9KCY37GNEJM9QYF51K64G39Y"></script>
        </div>
        )
}

export default Signup
