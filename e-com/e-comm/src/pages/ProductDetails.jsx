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
    <Helmet>
      {/* <CommonSection></CommonSection> */}
      <section className="prodetail-sec">
        <div>
          <img src={imgUrl} alt="" className="prodetail-image" />
        </div>
        <div>
          <h1>{productName}</h1>
          <span>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoMdStarHalf />
          </span>
          <p>{avgRating}(avgRating)</p>
          <p>{price}</p>
          <p>{shortDesc}</p>
          <button className="adtcrt">AddToCart</button>
        </div>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
