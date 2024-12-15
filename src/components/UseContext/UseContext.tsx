"use client";

import React, { useState } from "react";

export const UseContext = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <Login setUsername={setUsername} />
      <User username={username} />
    </div>
  );
};

const Login = ({ setUsername }) => {
  return (
    <div>
      <input
        className="text-black"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

const User = ({ username }) => {
  return <div>Username: {username}</div>;
};
