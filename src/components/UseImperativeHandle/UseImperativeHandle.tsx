"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export const UseImperativeHandle = (props: {}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={() => {
          buttonRef?.current?.alterToggle();
        }}
      >
        Button from Parent
      </button>

      <Button ref={buttonRef} />
    </div>
  );
};

const Button = forwardRef((props: {}, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});
