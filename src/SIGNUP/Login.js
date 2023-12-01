import React from "react"
import { useEffect,createContext,useContext } from 'react';
import { UserContext } from "./Signup";
import Heder from "../common/header/header";
import { useLocation } from "react-router-dom";
import "./pages.css";
export default function Login() {
  // const dataContext = useContext(UserContext);
// const data = dataContext(UserContext);
  const location=useLocation();
  const data=location.state?JSON.parse(location.state.data):null;
// const token=data.token;
console.log(data);

  return (
    <>
     <Heder/>
     <h1>   Hi....</h1>
     <h1>   Your Mobile no is :{data.mobile.number}</h1> 
     <h1>   Email :{data.email.email}</h1>
     {/* <h1>{data}</h1> */}
    </>
  )
}









            // window.open("https://criptof4.netlify.app/", "_blank");
