import { useParams } from "react-router-dom";
import Helmet from "../components/helmete/Helmete";
import CommonSection from "../components/Ui/CommonSection";
import products from "../assets/data/products";
import { IoStar } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";

import "../styles/ProductsDetails.css";
function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    productName,
    imgUrl,
    price,
    description,
    reviews,
    shortDesc,
    avgRating,
  } = product;
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="prodetail-sec">
        <div>
          <img src={imgUrl} alt="" className="prodetail-image" />
        </div>
        <div>
          <h1>{productName}</h1>
          <div className="pd-iostar">
            <span className="iostar">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoMdStarHalf />
            </span>
            <p>
              (<span className="colr-cng">{avgRating}</span> Rating)
            </p>
          </div>
          <p>{price}$</p>
          <p>{shortDesc}</p>
          <button className="adtcrt">AddToCart</button>
        </div>
      </section>
      <div className="descrp">
        <h4>Descripton</h4>
        <p>Reviews({reviews.length}) </p>
      </div>
      <div className="descrp">
        <h6>{description}</h6>
      </div>
    </Helmet>
  );
}

export default ProductDetails;
