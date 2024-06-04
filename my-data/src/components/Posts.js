import React from "react";


export default function Posts ({ posts }) {
  return (
    <div>
      <ul>
        {posts &&posts.map((post) => (
          <li key={post.id}>{post.id} - {post.title}</li>
        ))}
      </ul>
    </div>
  );
};
