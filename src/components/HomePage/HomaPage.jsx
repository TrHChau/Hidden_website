import AdvanceHealing from "../AdvanceHealing/AdvanceHealing";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { getProducts } from "../../apis/productService";
import Info from "../Info/Info";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";
import PopularProduct from "../PopularProduct/PopularProduct";
function HomePage() {
  const [listProduct, setProduct] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProduct(res.contents);
    });
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Info />
      <AdvanceHealing />
      <HeadingListProduct data={listProduct.slice(0, 2)} />
      <PopularProduct data={listProduct.slice(2, listProduct.length)} />
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default HomePage;
