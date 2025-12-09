import { useState } from "react";

const StateTest = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
  ]);

  const handleUpdate = () => {
    const updatedValue = fruits.map((fruit) =>
      fruit.id === 1 ? { ...fruit, name: "mango" } : fruit
    );
    setFruits(updatedValue);
    console.log(fruits);
  };

  return (
    <div>
      {fruits.map((fruit) => (
        <h1 key={fruit.id}>{fruit.name}</h1>
      ))}
      <button onClick={handleUpdate}>update</button>
    </div>
  );
};

export default StateTest;
