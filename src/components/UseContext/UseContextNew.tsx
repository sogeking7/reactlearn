"use client";

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const UseContextNew = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <h1 className="font-bold text-xl">Use Context New</h1>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        className="text-black"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

const User = () => {
  const { username } = useContext(AppContext);
  return <div>Username: {username}</div>;
};
