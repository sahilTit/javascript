// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet,Link } from "react-router-dom";
// import Table from "./Table";
const Navbar = () => {
  return (
    <>
      
        <nav className="topnav">
          <Link className="active" to="/">
            Login Panel
          </Link>
          <Link to="/table">Table</Link>
        </nav>
        <Outlet/>
    </>
  );
};
export default Navbar;
