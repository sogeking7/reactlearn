"use client";

import React, { useState } from "react";

export const UseReducer = (props: {}) => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click here
      </button>

      {showText && <p>This is a text</p>}
    </div>
  );
};
