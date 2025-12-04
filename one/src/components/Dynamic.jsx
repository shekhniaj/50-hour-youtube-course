const Dynamic = () => {
  const multiply = (a, b) => a * b;
  return (
    <div>
      <h3>Multiply</h3>
      <p>2 * 3 = {multiply(2, 3)}</p>
    </div>
  );
};

export default Dynamic;
