import { useReducer, useState } from "react";
import { reducer } from "./CounterReducer";

const initialState = { count: 0 };

const CounterComp = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState("");

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: Number(number) });
    setNumber("");
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: Number(number) });
    setNumber("");
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter.count}</h2>
      <input
        type="text"
        placeholder="enter a number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterComp;
