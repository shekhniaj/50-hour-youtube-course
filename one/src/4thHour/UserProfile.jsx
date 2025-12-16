import { useContext } from "react";
import { User } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(User);
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
    </div>
  );
};

export default UserProfile;
