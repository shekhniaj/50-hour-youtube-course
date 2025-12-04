const ProductInfo = () => {
  const product = [
    {id: 1, name: "Laptop", price: "$1200"},
    {id: 2, name: "Headphone", price: "$180"},
    {id: 3, name: "Phone", price: "$450"},
  ]
  return (
      <div>
        <h2>Product List</h2>
      {product.map(({ id, name, price }) => (
        <div key={id}>
          <p>Product: {name}</p>
          <p>Price: {price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductInfo;
