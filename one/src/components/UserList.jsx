const UserList = () => {
  const users = [
    { id: 1, name: "Bob", age: 22 },
    { id: 1, name: "John", age: 25 },
    { id: 1, name: "Mark", age: 28 },
  ];

  return (
    <div>
      <h2>User List</h2>
      {users.map(({ id, name, age }) => (
        <div key={id}>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
