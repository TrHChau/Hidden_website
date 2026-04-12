import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainLayout from "../../components/Layout/Layout";
import styles from "./styles.module.scss";
import Banner from "./components/Banner";
import { OurShopProvider } from "../../contexts/OurShopProvider";
import Filter from "./components/Filter";
import ListProduct from "./components/ListProduct";

function OurShop() {
  const { container, fncBox, specialText, btnback } = styles;
  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };
  return (
    <OurShopProvider>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={fncBox}>
            <div>
              Home &gt; <span className={specialText}>Shop</span>{" "}
            </div>
            <div className={btnback} onClick={() => handleBackPreviousPage()}>
              &lt;Return to previous page{" "}
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter />
          <ListProduct />
        </div>
      </MainLayout>
    </OurShopProvider>
  );
}

export default OurShop;
