import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

const Sidebar = ({
  handleCategoryFilter,
  handleColorFilter,
  handlePriceFilter,
}) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>

      <div className="sidebar-sections">
        <Category handleCategoryFilter={handleCategoryFilter} />
        <Price handlePriceFilter={handlePriceFilter} />
        <Colors handleColorFilter={handleColorFilter} />
      </div>
    </section>
  );
};

export default Sidebar;
