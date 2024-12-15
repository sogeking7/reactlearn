"use client";

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "toggleShowText":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

export const UseReducerNew = (props: {}) => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};
