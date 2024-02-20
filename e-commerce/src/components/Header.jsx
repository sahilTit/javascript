import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Header() {
  return (
    <>
      <div className="Header">
        <div>Logo</div>
        <div>
          <Link to="home">
            <Home />
          </Link>
          <Link>
            <About to="about" />
          </Link>
        </div>
        <div className="btn-holder">
          <Link to="login-page">
            <button className="login-btn">login-SignUp</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
