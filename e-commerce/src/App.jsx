import "./App.css";
import Header from "./components/Header";
import {Outlet} from "react-router-dom"
// import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Home/> */}
      {/* <LoginPage /> */}
      <Footer />
    </>
  );
}

export default App;
