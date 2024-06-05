import { useState, useEffect, Suspense } from "react";
import Posts from "./Posts";

// Suspense사용시 사용 X
// function User({ userId }) {
//   const [user, setUser] = useState([]);


//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((response) => response.json())
//       .then((user) => {
//         setTimeout(() => {
//           setUser(user);
//         }, 3000);
//       });
//   });

function User({ resource }) {
  const user = resource.user.read();



  return (
    <div>
      <p>
        User : {user.name} - ({user.email})
      </p>
      <Suspense fallback={<p>Posts Loading...</p>}> 
        <Posts resource={resource} />
      </Suspense>
    </div>
  );
}


export default User;