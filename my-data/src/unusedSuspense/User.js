import { useState, useEffect } from "react";
import Posts from "./Posts";


function User({ userId }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 3000);
      });
  });


  if (loading) return <p>User Loading...</p>;
  return (
    <div>
      <p>
        User : {user.name} - ({user.email})
      </p>
      <Posts userId={userId} />
    </div>
  );
}


export default User;