"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

export const UseLayoutEffect = (props: {}) => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
    // console.log("Use Layout Effect");
  }, []);
  useEffect(() => {
    inputRef.current.value = "HELLO";
    // console.log("Use Effect");
  }, []);

  return (
    <div>
      <input ref={inputRef} value="PEDRO" />
    </div>
  );
};
