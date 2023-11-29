import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './SIGNUP/Signup';
import { useEffect } from 'react';
function App() {
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
}

export default App;
