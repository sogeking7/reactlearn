"use client";

import React, { useEffect, useId, useState } from "react";

export const Greeting = (props: {}) => {
  const [name, setName] = useState("Marry");
  const [surname, setSurname] = useState("Poppins");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = name + " " + surname;
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <section className="flex flex-col gap-4">
      <Row label="Name">
        <input
          className="text-black"
          value={name}
          onChange={handleNameChange}
        />
      </Row>
      <Row label="Surname">
        <input
          className="text-black"
          value={surname}
          onChange={handleSurnameChange}
        />
      </Row>
      <Row label="Width">{width}</Row>
    </section>
  );
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
