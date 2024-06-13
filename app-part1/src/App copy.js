import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [notice, setNotice] = useState([]);
  const [totalpage, setTotalPage] = useState({});
  const [size, setSize] = useState();

  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLastPage = postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = [];
    currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
    return currentPosts;
  };

  useEffect(() => {
    let url = `/api/notice?page=${currentPage}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNotice(data.resultList)
        setTotalPage(data.totalPage)
        setSize(data.size)
      });
  }, [currentPage])


  return (
    <div className="App">
      <Posts notice={currentPosts(notice)}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalpage*size}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
