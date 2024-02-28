import Routers from "../../routers/Routers";
import Footer from "../footer/Footer";
import Header from "../header/Header";
function Layout() {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
