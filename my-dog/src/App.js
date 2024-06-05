import React, { useNavigate } from "react";
import './App.css';
// import styled from 'styled-components'
import { Printing} from "./components/Printing";
import { About } from "./components/About";
// import { Link } from "react-router-dom";
// import { Route, Router, Routes, json } from 'react-router-dom';



function App() {

 
  return (
    <div className="App">
        <h1 className='title'>Welcome, Dog World</h1>

        <About />
        <div className='btn-div'>
          <button className='btn-About' onClick={() => <About />}>About</button>
          <button className='btn-Print' onClick={() => <Printing />}>Printing</button>
        </div>
    </div>

  );
}

export default App;
