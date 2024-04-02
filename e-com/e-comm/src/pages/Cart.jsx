import Helmete from "../components/helmete/Helmete";
import CommonSection from "../components/Ui/CommonSection";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/Cart.css";
// import tdImg from "../assets/images/arm-chair-01.jpg";
import { MdDeleteForever } from "react-icons/md";
// import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totatlAmount = useSelector((state) => state.cart.totatlAmount);
  console.log(totatlAmount)
  return (
    <Helmete title={"Cart"}>
      <CommonSection title={"Shopping Cart"} />
      <div className="table-users">
        <div className="header">Users</div>
        {cartItems.length === 0 ? (
          <h2>No Products Added</h2>
        ) : (
          <table cellSpacing="0">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>qty</th>
              <th width="23">Delete</th>
            </tr>
            {cartItems.map((item, index) => (
              <Tr key={index} item={item}></Tr>
            ))}
          </table>
        )}
        <div>
          <h6>SubTotal</h6>
          {/* <span>${totatlAmount}</span> */}
        </div>
        <p>Taxes includes in checkout page</p>
        <div>
          <button>
            <Link to="/shop">Continue Shopping</Link>
          </button>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </div>
    </Helmete>
  );
}

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
    // console.log(item.id);
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" className="imgCart" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td className="mdel" onClick={deleteProduct}>
        <MdDeleteForever />
      </td>
    </tr>
  );
};

export default Cart;
