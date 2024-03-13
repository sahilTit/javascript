import Helmete from "../components/helmete/Helmete";
import { useState } from "react";
import CommonSection from "../components/Ui/CommonSection";
import products from "../assets/data/products";
import { CiSearch } from "react-icons/ci";
import productList from "../components/Ui/ProductsList";

function Shop() {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filteredValue === "sofa") {
      const filteredProduct = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProduct);
    }
  };
  return (
    <Helmete title={"Shop"}>
      <CommonSection title="Products" />
      <section className="shop-fill">
        <div className="selectors">
          <select onChange={handleFilter}>
            <option>Filter By Category</option>
            <option value="sofa">sofa</option>
            <option value="mobile">mobile</option>
            <option value="chai">chai</option>
            <option value="watch">watch</option>
            <option value="wireless">wireless</option>
          </select>
        </div>
        <div className="selectors">
          <select>
            <option>SortBy </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="serachbar">
          <input type="text" placeholder="search..." />
          <span>
            <CiSearch />
          </span>
        </div>
      </section>
      <section>
        {productsData.length === 0 ? (
          <h1>No productfound</h1>
        ) : (
          <productList data={productList} />
        )}
      </section>
    </Helmete>
  );
}

export default Shop;
