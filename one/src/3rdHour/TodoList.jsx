import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prev) => [...prev, todo]);
    setTodo("")
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="enter todo"
        />
        <input type="submit" value={"Add"} />
      </form>

      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
