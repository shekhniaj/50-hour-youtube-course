import { useState } from "react";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setTodos((prev) => [
      ...prev,
      { text: input, id: Math.floor(Math.random() * 20) },
    ]);
    setInput("");
  };

  const handleClose = (id) => {
    setTodos((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      return updated;
    });
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="type todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => handleClose(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
