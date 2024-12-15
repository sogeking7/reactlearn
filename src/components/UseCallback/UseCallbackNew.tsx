"use client";

import React, { useCallback, useEffect, useState } from "react";

export const UseCallbackNew = (props: {}) => {
  const [data, setData] = useState("Hello This is a comment");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name: string) => {
      return data + " " + name;
    },
    [data],
  );

  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Me
      </button>
      {toggle && <span>Toggle</span>}
    </div>
  );
};

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return (
    <div>
      <h1 className="font-bold text-xl">Use Callback New</h1>
      {returnComment("Sogeking")}
    </div>
  );
};
