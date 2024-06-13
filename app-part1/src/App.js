import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';


function App() {
  const [pageInfo, setPageInfo] = useState({});

  const fetchPageInfo = async(page) => {
    try {
      const response = await axios.get(`/api/notice`, {
        params: {
          page: page
        }
      });
      const data = response.data;
  
      setPageInfo(data);
    } catch(error) {
      console.log('erorr');
    }
  }

  useEffect(() => {
    fetchPageInfo(0);
  }, [])

  return (
    <div className="App">
      <form method='GET'>
        <input type='text' id='search-notice-input' 
                placeholder='Search Notice Keyword' name='keyword'>
        </input>
        <button type='submit'>search</button>
      </form>
      <ul>
        {pageInfo.resultList && pageInfo.resultList.map((notice) => (
          <li key={notice.no}>
            {notice.no} : {notice.title} - {notice.content}
          </li>
        ))}
      </ul>
      <Pagination 
        pageInfo={pageInfo}
        handlePageInfo={fetchPageInfo}
      />
    </div>
  );
}

export default App;
