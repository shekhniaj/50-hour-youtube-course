import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  // input filtering
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // button filter
  const handleButtonFilter = (e) => {
    const value = e.target.textContent;

    if (value === "All Products") {
      setSelectedCompany(null);
    } else {
      setSelectedCompany(value);
    }
  };

  // category filter
  const handleCategoryFilter = (e) => {
    const value = e.target.value;

    if (value === "all") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(value);
    }
  };

  // color filter
  const handleColorFilter = (e) => {
    const value = e.target.value;

    if (value === "all") {
      setSelectedColor(null);
    } else {
      setSelectedColor(value);
    }
  };

  // price filter
  const handlePriceFilter = (e) => {
    const value = e.target.value;

    if (value === "all") {
      setSelectedPrice(null);
    } else {
      setSelectedPrice(value);
    }
  };

  const matches = (value, expected) =>
    !expected || value.toLowerCase() === expected.toLowerCase();

  const handleFiltering = () => {
    let filteredProducts = products.filter(
      (p) =>
        (!query || p.title.toLowerCase().includes(query.toLowerCase())) &&
        matches(p.company, selectedCompany) &&
        matches(p.category, selectedCategory) &&
        matches(p.color, selectedColor) &&
        (!selectedPrice ||
          (p.newPrice <= Number(selectedPrice) &&
            p.newPrice > Number(selectedPrice) - 50))
    );

    return filteredProducts.map(({ img, title, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  };

  const result = handleFiltering();

  return (
    <>
      <Sidebar
        handleCategoryFilter={handleCategoryFilter}
        handleColorFilter={handleColorFilter}
        handlePriceFilter={handlePriceFilter}
      />
      <Nav handleInputChange={handleInputChange} />
      <Recommended handleButtonFilter={handleButtonFilter} />
      <Products result={result} />
    </>
  );
};

export default App;
