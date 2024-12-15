"use client";

import React, { useState } from "react";

export const UseState = (props: {}) => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Sogeking");

  const increment = () => {
    setCounter(counter + 1);
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-sm">
      <div className="flex space-x-3">
        <span>{counter}</span>
        <button className="bg-white text-black" onClick={increment}>
          Increment
        </button>
      </div>
      <div className="flex space-y-3 flex-col">
        <input className="text-black" value={inputValue} onChange={onChange} />
        {inputValue}
      </div>
    </div>
  );
};
