import React from "react";


export default function Posts ({ posts }) {
  return (
    <div>
      <ul>
        {posts && posts.map((post) => ( // 조건부 렌더링
          <li key={post.id}>{post.id} - {post.title}</li>
        ))}
      </ul>
    </div>
  );
};
