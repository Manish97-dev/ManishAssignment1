import React, { useState } from "react";
import "../App.css";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default FunctionCounter;
