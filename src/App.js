import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './SIGNUP/Signup';
import Login from './SIGNUP/Login';
import { useEffect } from 'react';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login'  element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
