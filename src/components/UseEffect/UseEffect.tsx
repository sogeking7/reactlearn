"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export const UseEffect = (props: {}) => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log("API WAS CALLED");
      setData(res.data.title);
    });

    // console.log("Hello World!");
  });
  return <div>{data}</div>;
};
