"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ModalDialogExample } from "./ModalDialogExample";
import { CounterExample } from "./CounterExample";

export const UseEffect = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log("API WAS CALLED");
      setData(res.data.title);
    });

    console.log("Hello World!");
  });

  return (
    <div>
      <h1 className="text-2xl">Use Effect Hook</h1>
      Fetched data: {data}
      <CounterExample />
      <ModalDialogExample />
    </div>
  );
};

// USAGE
//
// Some components need to stay connected to the network, some browser API, or a third-party library, while
// they are displayed on the page. These system's aren't controlled by React, so they are called external
//
// To connect your component to some external system call useEffect at the top of your component
// Here, external system means any piece of code that's not controlled by React, such as:
// 1. A timer managed with useInterval() and clearInterval().
// 2. An event subscription using window.addEventListener() and window.removeEventListener().
// 3. A third-party animation library with an API like animation.start() and animation.reset().
//
// If you're not connecting to any external system, you probably don't need useEffect.
//

// Data fetching
// Writing fetch calls inside Effects is a popular way to fetch data, especially in fully client-side apps
// This is, however, a very manual approach and it has significant downsides:
// 1. Effects don't run on the server: This means that the initial server-rendered HTML will only include a
// loading state with no data. The client computer will have to download all JavaScript and render your app
// only to discover that now it needs to load the data. This is not very effecient.
// 2. Fetching directly in Effects makes it easy to create "network waterfalls". You render the parent
// component, it fetches some data, renders the child component, and then they start fetching their data.
// If the network is not very fast, this is significantly slower than fetching all data in parallel.
// 3. Fetching directly in Effects usually means you don't preload or cache data. For example, if the
// component unmounts and then mounts again, it would have to fetch the data again.
// 4. It's not very ergonomic. There's quite a bit of boilerplate code involved when writing fetch calls in a
// way that doesn't suffer from bugs like a race conditions.(when )
//

//
// Passing no dependecy array at all
// useEffect(() => {})
// Effect runs after every single render and re-render of your component.
//

//
// If your app uses server rendering (either directly or via framework), your component will render in two
// different environments. On the server, it will render to produce the initial HTML. On the client, React will run
// the rendering code again so that it can attach your event handlers to that HTML. This is why, for hydration to
// work, your initial render output must be identical on the client and the server.
//
// While the app rendering, the user will see the initial render output. Then, when it's loaded and hydrated, your Effect
// will run and set didMount to true, triggering a re-render. This will switch to the client-only render output.
// Effects don't run on the server, so this why didMount was false during the initial render.
//
// function MyComponent() {
//   const [didMount, setDidMount] = useState(false);
//
//   useEffect(() => {
//     setDidMount(true);
//   }, []);
//
//   if (didMount) {
//     // ... return client-only JSX ...
//   }  else {
//     // ... return initial JSX ...
//   }
// }
//
//
