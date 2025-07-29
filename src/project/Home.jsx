import React, { useState, useEffect } from 'react';
import UserForm from "./UserForm"
import UserList from './UserList';

function Home()  {
const [users, setUsers] = useState([]);


// Load from localStorage
useEffect(() => {

const stored = localStorage.getItem("users");
if (stored) setUsers(JSON.parse(stored));
}, []);

// Save to localStorage
useEffect(() => {
localStorage.setItem("users", JSON.stringify(users));
}, [users]);

const addUser = (user) => {
setUsers([...users, user]);
};

const deleteUser = (index) => {
const newUsers = users.filter((_, i) => i !== index);
setUsers(newUsers);
};

return (

<div style={{ padding: '20px' }}>
 <h2>User Manager</h2>
 <UserForm addUser={addUser} />
 <UserList users={users} deleteUser={deleteUser} />
</div>
);
};
export default Home;