import { useEffect } from "react";
import "./Items.Module.css";
import { useState } from "react";
import axios from "axios";
function Items() {
  // const data = useContext(AppContext);
  let API = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  function getData() {
    try {
      axios.get(API).then((res) => {
        setData(res.data);
        // console.log(JSON.parse(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.map((eachData, index) => {
        return (
          <>
            <div className="main" key={index}>
              <img className="img-1" src={eachData.image} alt="image" />
              <p className="ppd">{eachData.title}</p>
              <div className="main-1">
                <button className="btn-d">Add To Cart</button>
                <span className="price-tag">${eachData.price}</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Items;
