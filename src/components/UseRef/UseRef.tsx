"use client";

import React, { useRef } from "react";

export const UseRef = (props: {}) => {
  const inputRef = useRef(null);
  const onClick = () => {
    // console.log(inputRef.current.value);
    // inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Sogeking</h1>
      <input
        className="text-black"
        ref={inputRef}
        type="text"
        placeholder="Enter something..."
      />
      <button onClick={onClick}>Change name</button>
    </div>
  );
};
