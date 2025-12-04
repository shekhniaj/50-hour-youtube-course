const Greeting = () => {
  const name = "Coding exercise";
  return (
    <div>
      <h1>{name}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Greeting;
