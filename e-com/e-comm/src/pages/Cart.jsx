import Helmete from "../components/helmete/Helmete";
import CommonSection from "../components/Ui/CommonSection";
import "../styles/Cart.css";
// import tdImg from "../assets/images/arm-chair-01.jpg";
import { MdDeleteForever } from "react-icons/md";
// import { cartActions } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
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
                <>
                  <tr>
                    <td>
                      <img src={item.imgUrl} alt="" className="imgCart" />
                    </td>
                    <td>{item.productName}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}px</td>
                    <td className="mdel">
                      <MdDeleteForever />
                    </td>
                  </tr>
                </>
              ))}
          </table>
        )}
      </div>
    </Helmete>
  );
}

export default Cart;
