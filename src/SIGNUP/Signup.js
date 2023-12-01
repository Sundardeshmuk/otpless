import React, { useState,createContext } from 'react'
import { useEffect } from 'react';
import { Helmet } from "react-helmet"
import Login from './Login';
import { useNavigate } from 'react-router-dom';
const UserContext = createContext();

function Signup() {
    const script = document.createElement("script");
let nav=useNavigate();
    // const [bulian,setbulian]=useState(false);
    // const [data,setdata]=useState({});
    let  x="";
    useEffect(() => {
        window.otpless = (otplessUser) => {
            alert(JSON.stringify(otplessUser));
             x=  JSON.stringify(otplessUser);
            //   setdata(x);         
            //   setbulian(true);
              nav("/login",{state:{data:x}});
        //     console.log(JSON.stringify(otplessUser),"gffguggg.........");
    };
    
}, []);   
  
    return (
       <div id="otpless-login-page">
          <Helmet>
            <script   src="https://otpless.com/auth.js"  ></script>
          </Helmet>
         {/* {bulian &&(             
             <UserContext.Provider value={x}>
             <Login/>
           </UserContext.Provider>
                 )
        } */}

        </div>)
}

export default Signup
export {UserContext}