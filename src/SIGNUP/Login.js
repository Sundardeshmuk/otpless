import React from "react"
import { useEffect,createContext,useContext } from 'react';
import { UserContext } from "./Signup";
import Heder from "../common/header/header";
import { useLocation } from "react-router-dom";
import "./stile.css";
export default function Login() {
  // const dataContext = useContext(UserContext);
// const data = dataContext(UserContext);
  const location=useLocation();
  const data=location.state?JSON.parse(location.state.data):null;
// const token=data.token;
console.log(data);
const num=data.mobile.number.substring(2);
console.log(num);
  return (
    <>
     <Heder/>
     <h1>   Hi....</h1>
     <h1>   Your Mobile no is : { num}</h1> 
     <h1>   Email : { data.email.email}</h1>
     <h1> Click on the Login button</h1>
    </>
  )
}









            // window.open("https://criptof4.netlify.app/", "_blank");
