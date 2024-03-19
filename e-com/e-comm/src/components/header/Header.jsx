import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Header.css";
import userIcon from "../../assets/images/user-icon.png";
import { CiHeart } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="header-main">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div>
            <h2>TechSofa</h2>
            <p>since 2003</p>
          </div>
        </div>
        <div className="navigation">
          <ul className="menu">
            {nav__links.map((item, index) => (
              <li
                className={({ isactive }) => {
                  ` ${isactive ? "menu-li" : "active"}`;
                }}
                key={index}
              >
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-three">
          <div className="nav-icon">
            <span className="cart-icon">
              <MdOutlineShoppingCart />
            </span>
            {/* <span className="badge">1</span> */}
            <span className="menu-icon">
              <CiHeart />
            </span>

            <span className="usericon">
              {isAuthenticated ? (
                <button
                  onClick={() =>
                    logout({
                      returnTo: window.location.origin,
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
