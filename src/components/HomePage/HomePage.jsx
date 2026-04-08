import AdvanceHealing from "../AdvanceHealing/AdvanceHealing";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { getProducts } from "../../apis/productService";
import Info from "../Info/Info";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";
import PopularProduct from "../PopularProduct/PopularProduct";

import Footer from "../Footer/Footer";
import SaleHomePage from "../Sale/SaleHomePage/SaleHomePage";
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
      <PopularProduct data={listProduct.slice(2, 10)} />
      <SaleHomePage />
      <Footer />
    </div>
  );
}

export default HomePage;
