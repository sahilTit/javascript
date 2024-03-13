import Helmete from "../components/helmete/Helmete";
import { useState } from "react";
import CommonSection from "../components/Ui/CommonSection";
import products from "../assets/data/products";
import { CiSearch } from "react-icons/ci";
import ProductList from "../components/Ui/ProductsList";

function Shop() {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProduct = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProduct);
    } else if (filterValue === "mobile") {
      const filteredProduct = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProduct);
    } else if (filterValue === "watch") {
      const filteredProduct = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProduct);
    } else if (filterValue === "wireless") {
      const filteredProduct = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProduct);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchProduct);
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
            {/* <option value="chai">chai</option> */}
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
          <input type="text" placeholder="search..." onChange={handleSearch} />
          <span>
            <CiSearch />
          </span>
        </div>
      </section>
      <section className="products-filter">
        {productsData.length === 0 ? (
          <h1 className="not-found">No productfound!</h1>
        ) : (
          <ProductList data={productsData} />
        )}
      </section>
    </Helmete>
  );
}

export default Shop;
