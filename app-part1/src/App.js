import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';


function App() {
  const [pageInfo, setPageInfo] = useState({});
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  }


  const handleKeywordSubmit = (e) => {
    e.preventDefault(); // form의 기본 기능(새로고침) 방지
    fetchPageInfo({keyword : keyword});
  }



  
  const fetchPageInfo = async(param) => {
    let url = `/api/query-notice?`;  
    let queryParams = {...param};   // 구조 풀어주기
    console.log(queryParams);
    let queryString = new URLSearchParams(queryParams).toString();
    console.log(queryString);
    try {
      const response = await axios.get(`${url}?${queryString}`);
      
    // v1
    // let {keyword,page} = param;   // 여러개를 넘길때 객체로 넘긴다
    // try {
    //   const response = await axios.get(`/api/query-notice`, {
    //     params: {
    //       keyword: keyword,
    //       page: page
    //     }
    //   });
      const data = response.data;
      setPageInfo(data);
    } catch(error) {
      console.log('erorr');
    }
  }

  useEffect(() => {
    fetchPageInfo({page: 0});
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleKeywordSubmit}>
        <input type='text' 
              id='search-notice-input' 
              placeholder='Search Notice Keyword' 
              name='keyword'
              onChange={handleKeywordChange}
              >
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
        keyword={keyword}
      />
    </div>
  );
}

export default App;
