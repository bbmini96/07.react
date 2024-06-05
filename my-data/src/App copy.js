import "./App.css";
import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import styled from "styled-components";
// import Posts from "./components/Posts";
const Posts = lazy(() => import("./components/Posts"));   


const LoadingStyled = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  animation:blink 1s linear infinite;
}
`

function Loading() {  // 로딩중일때 페이지
  return <LoadingStyled><h1>Loading...</h1></LoadingStyled>
}

function App() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading] = useState(true);

  // async ~ await 사용하기
  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');  // 데이터 가져오기
    const result = await response.data;

    setTimeout(() => {  // 2초동안의 시간 주기(loading중)
      setPosts((prev) => result ? result:prev); // result가 있으면 result값을 반환 없다면 prev이전값 반환 result있나 없나 확인해야함
      setLoading(false);    // 상태 변화(대기상태 풀기)
    }, 2000);
    }

  useEffect(() => {

      fetchData();
      // 1) async ~ await 추후 변경
      // 2) loading중일때의 데이터 상태를 어떻게 처리해야하는가
      // 3) 재사용 - 기능 분리
  },[])

  // Loading(state,useEffect => lazy, Suspense)  대기 상태
  // if(loading) return Loading(); 



  return (
    <div className="App">
      {/* suspense는 처음 렌더링될때만 실행된다 */}
      <Suspense fallback= { Loading() }>  
        <Posts posts={posts} />
      </Suspense>
    </div>
  );
}

export default App;