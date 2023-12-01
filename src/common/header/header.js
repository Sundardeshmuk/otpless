import React, { useEffect, useState } from "react";
import "./header.css";
import Button from "../button/button";
import Switch from '@mui/material/Switch';

export default function Heder(){
    const[darkmode,setdarkmode]=useState(
        localStorage.getItem("theme")==="dark"?true:false
    );
    useEffect(()=>{
        if (localStorage.getItem("theme")==="dark"){
            setdark();
        }else{
            setlight();
        }


    },[]);
const setdark=()=>{
    localStorage.setItem("theme","dark");
    document.documentElement.setAttribute("data-theme","light");
}
const setlight=()=>{
 localStorage.setItem("theme","light");
    document.documentElement.setAttribute("data-theme","dark");
}
const changemode=()=>{
 if(localStorage.getItem("theme")!=="dark"){
setdark();
 }else{
    setlight();
 }
 setdarkmode(!darkmode);
}


    return(
        <div className="heder">  
            <h1>Crtpto-tracker<span style={{color:"blue" }}>.</span></h1>
            <div className="links">
                <Switch checked={darkmode} onClick={()=>changemode()}/>
                <a href="/Home"><p className="link">Home</p></a>             
            
                <a href="https://criptof4.netlify.app/"><Button text={"Login"} /></a>
            </div>
            
        </div>

    )
}
