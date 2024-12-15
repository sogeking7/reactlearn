import React, { useId } from "react";

export const UseId = (props: {}) => {
  const id = useId();
  const id2 = useId();
  return (
    <div>
      <label htmlFor={id}>Enter your name</label>
      <input type="text" id={id} />

      <label htmlFor={id2}>Enter your name</label>
      <input type="text" id={id2} />
    </div>
  );
};
