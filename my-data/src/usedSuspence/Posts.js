import { useState, useEffect } from "react";
import { FetchPosts } from "../api/fetchData";


// Suspense사용시 useEffect나 useState를 사용할 필요가 없다
// function Posts({ userId }) {
//   const [posts, setPosts] = useState([]);


//   useEffect(() => {
//     setTimeout(() => {
//       FetchPosts(userId).then((posts) => setPosts(posts)) // return 타입이 promise여서 then을 사용해야 한다
//     }, 3000)
//   });


function Posts({ resource }) {

  const posts = resource.posts.read();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}


export default Posts;