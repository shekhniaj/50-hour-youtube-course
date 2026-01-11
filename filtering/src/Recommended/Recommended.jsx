import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleButtonFilter }) => {
  return (
    <div>
      <h1 className="recommended-title">Recommended</h1>

      <div className="recommended-flex">
        <Button onClick={handleButtonFilter} title={"All Products"} />
        <Button onClick={handleButtonFilter} title={"Nike"} />
        <Button onClick={handleButtonFilter} title={"Adidas"} />
        <Button onClick={handleButtonFilter} title={"Puma"} />
        <Button onClick={handleButtonFilter} title={"Vans"} />
      </div>
    </div>
  );
};

export default Recommended;
