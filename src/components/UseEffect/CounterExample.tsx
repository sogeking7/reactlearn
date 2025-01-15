"use client";
import React, { useEffect, useState } from "react";

export const CounterExample = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);
  return (
    <div>
      <p className="text-bold text-white text-lg">{counter}</p>
    </div>
  );
};
