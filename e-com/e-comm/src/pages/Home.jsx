import { useState, useEffect } from "react";
import Helmete from "../components/helmete/Helmete";
import heroImg from "../assets/images/hero-img.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import ProductsList from "../components/Ui/ProductsList";
import products from "./../assets/data/products";

// import {myData} from '../assets/data/data.json'
function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [famousProducts, setFamousProducts] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    const FilteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const FilteredFamousProducts = products.filter(
      (item) => item.category === "mobile"
    );
    setFamousProducts(FilteredFamousProducts);
    setTrendingProducts(FilteredTrendingProducts);
  }, []);

  // console.log(myData)
  return (
    <>
      <Helmete title={"Home"}>
        <section className="home-sec">
          <div className="home-section">
            <div className="hero-info">
              <p className="">Trending Product in {year}</p>
              <h2>Make your interior Minimlistic & Morden</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                obcaecati animi voluptas molestias tempore blanditiis explicabo
                quas quo omnis numquam!
              </p>
              <Link to="/shop">
                <button className="buybtn">Shop Now 👉🏻</button>
              </Link>
            </div>
            <div className="hero-img">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </section>
        <Services />
        <section className="home-trend">
          <div className="inner">
            <h2>All Product</h2>
          </div>
          <div className="products-list">
            <ProductsList data={trendingProducts} />
          </div>
        </section>
        <section className="home-trend">
          <div className="inner">
            <h2>Famous Product</h2>
          </div>
          <div className="products-list">
            <ProductsList data={famousProducts} />
          </div>
        </section>
      </Helmete>
    </>
  );
}

export default Home;
