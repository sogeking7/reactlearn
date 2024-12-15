"use client";
import React, { useState, useTransition } from "react";

export const UseTransition = (props: {}) => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleFilter = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div>
      <input
        value={query}
        onChange={handleFilter}
        type="text"
        placeholder="Search items"
        className="text-black"
      />
      {isPending && <p>Loading...</p>}
      <ul className="text-white">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
