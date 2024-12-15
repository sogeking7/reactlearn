"use client";

import React, { useEffect, useId, useState } from "react";

export const GreetingNew = (props: {}) => {
  const name = useFormInput("Marry");
  const surname = useFormInput("Poppins");

  const width = useWindowWidth();
  useDocumentTitle(name.value + " " + surname.value);

  return (
    <section className="flex flex-col gap-4">
      <Row label="Name">
        <input className="text-black" {...name} />
      </Row>
      <Row label="Surname">
        <input className="text-black" {...name} />
      </Row>
      <Row label="Width">{width}</Row>
    </section>
  );
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  });
};

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleValueChange,
  };
};

const Row = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-sm text-zinc-600">
        {label}
      </label>
      <div id={id} className="text-base">
        {children}
      </div>
    </div>
  );
};
