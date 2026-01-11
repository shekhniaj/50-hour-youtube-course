import "./Nav.css";
import user from '../assets/user.svg'
import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'

const Nav = ({handleInputChange}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          type="text"
          className="search-input"
          placeholder="enter shoe name"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <img src={heart} className="nav-icons custom-css" alt="heart icon" />
        </a>

        <a href="#">
          <img src={cart} className="nav-icons custom-css" alt="cart icon" />
        </a>

        <a href="#">
          <img src={user} className="nav-icons custom-css" alt="user add icon" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
