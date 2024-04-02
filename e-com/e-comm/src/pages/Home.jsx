import { useState, useEffect } from "react";
import Helmete from "../components/helmete/Helmete";
import heroImg from "../assets/images/hero-img.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import ProductsList from "../components/Ui/ProductsList";
// import products from "./../assets/data/products";
import counterImg from "./../assets/images/counter-timer-img.png";
import Clock from "../components/Ui/Clock";
import axios from "axios";
// import {myData} from '../assets/data/data.json'
function Home() {
  // const [trendingProducts, setTrendingProducts] = useState([]);
  // const [famousProducts, setFamousProducts] = useState([]);
  // const [mobileProducts, setMobileProducts] = useState([]);
  // const [wirelessProducts, setWirelessProducts] = useState([]);
  const [data, setData] = useState([]);
  const year = new Date().getFullYear();
  // useEffect(() => {
  //   const FilteredTrendingProducts = products.filter(
  //     (item) => item.category === "chair"
  //   );
  //   const FilteredFamousProducts = products.filter(
  //     (item) => item.category === "sofa"
  //   );
  //   const FilterdMobileProducts = products.filter(
  //     (item) => item.category === "mobile"
  //   );
  //   const FilteredWirelessProducts = products.filter(
  //     (item) => item.category === `watch`
  //   );
  //   setFamousProducts(FilteredFamousProducts);
  //   setTrendingProducts(FilteredTrendingProducts);
  //   setMobileProducts(FilterdMobileProducts);
  //   setWirelessProducts(FilteredWirelessProducts);
  // }, []);
  function getData() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
      })
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // const setAllData = (id, image, price, title, rating) => {
  //   const allData = {
  //     id: id,
  //     image: image,
  //     price: price,
  //     title: title,
  //     rating: rating,
  //   };
  //   return data;
  // };

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
            <h2>All Chairs</h2>
          </div>
          <div className="products-list">
            <ProductsList data={data} />
          </div>
        </section>
        <section className="home-trend">
          <div className="inner">
            <h2>Famous Sofas</h2>
          </div>
          <div className="products-list">
            <ProductsList data={data} />
          </div>
        </section>
        <section className="timer-count">
          <div className="time-counter">
            <div>
              <h4 className="offer">Offer for Limited Time period</h4>
              <h3 className="qual">Quality Product </h3>
              <Clock />
              <Link to="/shop">
                <button className="str-btn">Visti Store</button>
              </Link>
            </div>
            <div>
              <img src={counterImg} alt="" />
            </div>
          </div>
        </section>
        <section className="home-trend">
          <div className="inner">
            <h2>Sale Mobiles</h2>
          </div>
          <div className="products-list">
            <ProductsList data={data} />
          </div>
        </section>
        <section className="home-trend">
          <div className="inner">
            <h2>Sale Wireless</h2>
          </div>
          <div className="products-list">
            <ProductsList data={data} />
          </div>
        </section>
      </Helmete>
    </>
  );
}

export default Home;
