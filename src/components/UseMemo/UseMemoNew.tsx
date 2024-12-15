"use client";

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

export const UseMemoNew = (props: {}) => {
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

  const getLongestName = useMemo(() => findLongestName(data), [data]);
  return (
    <div>
      <h1 className="font-bold text-xl">Use Memo New</h1>
      <div>{getLongestName}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
      {toggle && <span> Toggle </span>}
    </div>
  );
};
