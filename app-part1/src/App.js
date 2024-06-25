import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import {Route, Routes} from 'react-router-dom';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';
import CookieTest from './components/CookieTest';


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/file-upload' element={<FileUpload />} />
        <Route path='/file-download' element={<FileDownload />} />
        <Route path='/cookie-test' element={<CookieTest />} />
      </Routes>
    </div>
  );
}

export default App;
