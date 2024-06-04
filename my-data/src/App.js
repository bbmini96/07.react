import "./App.css";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import axios from "axios";


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await axios;
      axios
        .get('https://jsonplaceholder.typicode.com/posts')  // 데이터 가져오기
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) =>{ // 에러메세지
          setPosts([]);
        }) 

      }
      fetchData();
      // 1) async ~ await 추후 변경
      // 2) loading중일때의 데이터 상태를 어떻게 처리해야하는가
      // 3) 재사용 - 기능 분리
  },[])

  return (
    <div className="App">
      <Posts posts={posts}></Posts>
    </div>
  );
}

export default App;