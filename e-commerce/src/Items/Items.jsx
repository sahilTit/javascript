import "./Items.Module.css";
function Items(props) {
  return (
    <div className="main">
      <img
        className="img-1"
        src={props.image}
        alt="image"
      />
      <p className="ppd">Mens Casual Premium Slim Fit Shirts</p>

      <div className="main-1">
        <button className="btn-d">Add To Cart</button>
        <span className="price-tag">$99.7</span>
      </div>
    </div>
  );
}

export default Items;
