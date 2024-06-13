import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import "./App.css";


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    fetchData();
  }, []);
  console.log(posts);


  // 페이지네이션을 위한 필요 데이터
  /*
    1. 페이지당 출력 개수(10) postsPerPage
    2. indexOfLastPage
    3. indexOfFirstPage
    4. currentPage
  */
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = [];
    currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
    return currentPosts;
  };


  return (
    <div className="App">
      <Posts posts={currentPosts(posts)}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}


export default App;