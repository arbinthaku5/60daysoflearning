import React, { useEffect, useState } from "react";

const RandomUser = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const person = data.results[0];
      setUser(person);
      localStorage.setItem("savedUser", JSON.stringify(person));
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      fetchUser();
    }
  }, []);

  return (
<div className="container">
  <h2>Random User</h2>
  {user ? (
    <div className="card">
      <img src={user.picture.large} alt="User" className="avatar" />
      <p className="text"><strong>Name:</strong> {user.name.first} {user.name.last}</p>
      <p className="text"><strong>Email:</strong> {user.email}</p>
      <button onClick={fetchUser} className="button">Fetch New User</button>
    </div>
  ) : (
    <p className="text">Loading user...</p>
  )}
</div>

  );
};

export default RandomUser;
