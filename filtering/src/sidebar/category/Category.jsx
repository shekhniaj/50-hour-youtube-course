import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleCategoryFilter }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <Input
        handleChange={handleCategoryFilter}
        name={"category"}
        value={"all"}
        title={"All"}
      />
      <Input
        handleChange={handleCategoryFilter}
        name={"category"}
        value={"sneakers"}
        title={"Sneakers"}
      />
      <Input
        handleChange={handleCategoryFilter}
        name={"category"}
        value={"flats"}
        title={"Flats"}
      />
      <Input
        handleChange={handleCategoryFilter}
        name={"category"}
        value={"sandals"}
        title={"Sandals"}
      />
      <Input
        handleChange={handleCategoryFilter}
        name={"category"}
        value={"heels"}
        title={"Heels"}
      />
    </div>
  );
};

export default Category;
