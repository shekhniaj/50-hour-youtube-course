import bag from "../assets/bag.svg";

const Card = ({img, title, prevPrice, newPrice}) => {
  return (
    <section className="card">
      <img
        className="card-img"
        src={img}
        alt="product image"
      />

      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>${newPrice}
          </div>

          <div className="bag">
            <img src={bag} alt="bag icon" className="icons" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
