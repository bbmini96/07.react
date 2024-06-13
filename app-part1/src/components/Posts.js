import React from "react";


export default function Posts ({ notice }) {
  return (
    <div>
     <ul>
        {notice && notice.map((posts) => (
          <li key={posts.no}>
            {posts.no} : {posts.title} - {posts.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
