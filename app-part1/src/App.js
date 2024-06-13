import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {

    
    let page = 9;
    // v1 : general fetch
    // fetch(`http://localhost:8080/api/notice?page=${page}`)
    
    
    // v2 : URLSearchParams
    // let url = new URL(`/api/notice`);
    // let params = { page }; // { page : page }
    // url.search = new URLSearchParams(params).toString();
    let url = `/api/notice?page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNotice(data.resultList));
  }, [])

  return (
    <div className="App">
      <ul>
        {notice && notice.map((notice) => (
          <li key={notice.no}>
            {notice.no} : {notice.title} - {notice.content}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
