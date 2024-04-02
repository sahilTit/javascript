import { useEffect } from "react";
import { axios } from "axios";
import "./Items.Module.css";
function Items(data) {
  let API = "https://fakestoreapi.com/products";
  // const [data, setData] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);
  return (
    <div className="main">
      <img className="img-1" src={data.image} alt="image" />
      <p className="ppd">{data.title}</p>

      <div className="main-1">
        <button className="btn-d">Add To Cart</button>
        <span className="price-tag">$99.7</span>
      </div>
    </div>
  );
}

export default Items;
