import "./App.css";
import Header from "./components/Header";
// import Home from "./pages/Home";
import Outlet from "react-router-dom"
// import {Outlet} from "react-router-dom"
// import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Outlet />
      {/* <LoginPage /> */}
      <Footer />
    </>
  );
}

export default App;
