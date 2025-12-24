import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>

      <div className="btns-container">
        <button onClick={increment} className="btn">
          +
        </button>
        <button onClick={decrement} className="btn">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
