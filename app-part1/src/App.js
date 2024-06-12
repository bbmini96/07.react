
// import './App.css';
import {useEffect, useState} from 'react';
// import { fetchNotice } from './api/fetchData';

function App() {
  const [notice, setNotice] = useState([]);

  useEffect(() =>{
    let page = 5;
    fetch(`http://localhost:8080/api/notice?page=${page}`)
    .then((response) => response.json())
    .then((data)=>setNotice(data.content))
  },[])


  return (
    <div className="App">
      <ul>
        {notice && notice.map((notice) => (
          <li key={notice.no}>
            {notice.no}. {notice.title} - {notice.content}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
