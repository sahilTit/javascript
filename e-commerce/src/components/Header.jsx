import { NavLink,Link } from "react-router-dom";
import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";
function Header() {
  return (
    <>
      <div className="Header">
        <div>Logo</div>
        <div className="pages">
          <NavLink to="home">Home</NavLink>

          <NavLink to="about">Men</NavLink>
        </div>
        <div className="btn-holder">
          <Link to="login-page">
            <button className="login-btn">login</button>
          </Link>
          <div>
            <Link to="cart">
              <MdOutlineShoppingCart className="cart-add" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
