import { useEffect, useState } from "react";

const InputHandle = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleClear = () => {
    setName("");
    localStorage.setItem("name", "");
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default InputHandle;
