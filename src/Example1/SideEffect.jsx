import { useEffect, useState } from "react";

function SideEffect() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users)
  return (
    <>
      <h2>User List</h2>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              👤 {user.name} ({user.email})
            </li>
          ))}
      </ul>
    </>
  );
}

export default SideEffect;
