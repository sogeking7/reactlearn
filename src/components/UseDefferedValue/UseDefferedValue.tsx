"use client";

import React, { useDeferredValue, useState } from "react";

export const UseDefferedValue = (props: {}) => {
  const [query, setQuery] = useState("");

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const defferedQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(defferedQuery.toLowerCase()),
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search items"
        className="text-black"
      />
      {query !== defferedQuery && <p>Loading...</p>}
      <ul className="text-white">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
