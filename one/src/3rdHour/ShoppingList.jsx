import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([...items, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="enter product name"
        />
        <input
          type="text"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="enter product name"
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {items.length !== 0 &&
          items.map((item, idx) => (
            <div key={idx}>
              <h1>{item.name}</h1>
              <p>{item.quantity}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShoppingList;
