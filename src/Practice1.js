import React, { useState } from "react";
import "./App.css";


function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button className="button" onClick={handleIncrease}>Increase +</button>
      <button className="button" onClick={handleReset}>Reset</button>
      <button className="button" onClick={handleDecrease}>Decrease - </button>
    </>
  );
};

export default Counter;

/*
  * 1. Import useState from react
  * 2. Add a count value to state
  * 3. Display the count in an h1
  * 4. Add a button to increase the count
  */