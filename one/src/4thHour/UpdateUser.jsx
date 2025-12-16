import { useContext, useState } from "react";
import { User } from "../context/UserContext";

const UpdateUser = () => {
  const { setUser } = useContext(User);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    if (name === "" || age === "") return;
    setUser({ name, age });
    setName("");
    setAge("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default UpdateUser;
