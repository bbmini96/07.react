
import './App.css';
import {useEffect, useState} from 'react';
// import { fetchNotice } from './api/fetchData';

function App() {
  const [notice, setNotice] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:8080/api/notice')
    .then((response) => response.json())
    .then((data)=>console.log(data))
  },[])


  return (
    <div className="App">

    </div>
  );
}

export default App;
