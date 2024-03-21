import { useParams } from "react-router-dom";
import Helmet from "../components/helmete/Helmete";
import CommonSection from "../components/Ui/CommonSection";
import products from "../assets/data/products";
import { IoStar } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";

import "../styles/ProductsDetails.css";
import { toast } from "react-toastify";
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
    category,
  } = product;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        price,
        image: imgUrl,
      })
    );
    toast.success("Product added successfully");
  };
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
          <div className="pr-cat">
            <p>{price}$</p>
            <span>Catergory:{category}</span>
          </div>
          <p>{shortDesc}</p>
          <button className="adtcrt" onClick={addToCart}>
            AddToCart
          </button>
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
