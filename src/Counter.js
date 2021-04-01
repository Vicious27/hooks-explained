import React, { useState } from "react";
import "./App.css";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h2>You clicked {count} times</h2>
      <button className="button" onClick={() => setCount(count + 1)} > Add 1</button>
      <button className="button" onClick={() => setCount(count - 2)}>Take 2</button>
    </>
  );
}

export default Counter;