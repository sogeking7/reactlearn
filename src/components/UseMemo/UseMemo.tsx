"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export const UseMemo = (props: {}) => {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);
  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestComment = "";
    for (const comment of comments) {
      if (comment.name.length > longestComment.length) {
        longestComment = comment.name;
      }
    }
    console.log("This was computed");
    return longestComment;
  };

  return (
    <div>
      <div>{findLongestName(data)}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
      {toggle && <span> Toggle </span>}
    </div>
  );
};
