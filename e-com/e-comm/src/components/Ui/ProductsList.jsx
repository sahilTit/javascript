import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

import "../../styles/ProductsList.css";
function ProductsList({ data }) {
  // console.log(data);
  return (
    <div className="product-li">
      {data?.map((item) => (
        <ProductCard  item={item} />
      ))}
    </div>
  );
}
ProductsList.propTypes = {
  data: PropTypes.node,
};
export default ProductsList;
