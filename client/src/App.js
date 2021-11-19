// import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";
// import About from "./about";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/api/users/");
    const data = res.json();
    return data;
  };

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <ul className="users">
          {users.map((user) => (
            <li key={user.id} className="user">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <a href="/about">About</a>
    </div>
  );
}
