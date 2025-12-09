import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Niaj",
    age: 19,
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateValue = { ...profile };
    if (name.length !== 0) updateValue.name = name;
    if (age > 0 && age !== "") updateValue.age = age;
    setProfile(updateValue);

    setName("");
    setAge("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="enter name"
        />
        <input
          type="text"
          value={age}
          onChange={handleAgeChange}
          placeholder="enter age"
        />
        <input type="submit" value={"submit"} />
      </form>

      <p>{profile.name}</p>
      <p>{profile.age}</p>
    </div>
  );
};

export default Profile;
