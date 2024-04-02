import { NavLink } from "react-router-dom";
import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../context/Context";
function Header() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  // const logout = async () => {
  //   setAuth({});
  //   navigate("/linkpage");
  // };
  return (
    <>
      <div className="Header">
        <div>Logo</div>
        <div className="pages">
          <NavLink to="home">Home</NavLink>

          <NavLink to="about">Men</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </div>
        <div className="btn-holder">
          <NavLink to="signup">
            <button className="login-btn">
              {setAuth ? "Login" : "SignUp"}
            </button>
          </NavLink>
          <div>
            <NavLink to="cart">
              <MdOutlineShoppingCart className="cart-add" size={30} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
