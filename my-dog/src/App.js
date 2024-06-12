import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Printing } from "./components/Printing";
import { About } from "./components/About";
import styled from "styled-components";



function App() {
  const navigate = useNavigate();
 
  return (
    <div className="App">
        <h1 className='title'>Welcome, Dog World</h1>
        <div className='btn-div'>
          <button className='btn-About' onClick={() => navigate('/about')}>About</button>
          <button className='btn-Print' onClick={() => navigate('/printing')}>Printing</button>
        </div>
    </div>

  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/printing" element={<Printing />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
