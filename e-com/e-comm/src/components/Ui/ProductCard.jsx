import "../../styles/ProductCard.css";
import PropTypes from "prop-types";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

function ProductCard({ item }) {
  // console.log("sam", data);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    // alert("Product Added To Cart");
    toast.success("product Added SuccesFully");
    // console.log()
  };
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={item.imgUrl} alt="" />
      </div>
      <h3 className="Product-name">
        <Link to={`/shop/${item.id}`}>{item.productName}</Link>
      </h3>
      <span className={item.chair}>{item.category}</span>
      <div className="product-card-bottom">
        <span className="price">{item.price}</span>
        <span className="add" onClick={addToCart}>
          <IoAddOutline />
        </span>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.node,
};

export default ProductCard;
