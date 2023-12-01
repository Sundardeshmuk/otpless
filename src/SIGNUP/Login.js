import React from "react"
import { useEffect,createContext,useContext } from 'react';
import { UserContext } from "./Signup";
import Heder from "../common/header/header";
import { useLocation } from "react-router-dom";
export default function Login() {
  // const dataContext = useContext(UserContext);
// const data = dataContext(UserContext);
  const location=useLocation();
  const data=location.state?location.state.data:null;
console.log(data);
  return (
    <>
     <Heder/>
    </>
  )
}









            // window.open("https://criptof4.netlify.app/", "_blank");
