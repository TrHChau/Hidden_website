import AdvanceHealing from "../AdvanceHealing/AdvanceHealing";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

import Info from "../Info/Info";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";

import MainLayout from "../Layout/Layout";
import styles from "./styles.module.scss";
function HomePage() {
  const { container } = styles;

  return (
    <>
      <MainLayout>
        <div className={container}>
          <Header />
          <Banner />
          <Info />
          <AdvanceHealing />
          <HeadingListProduct />
        </div>
      </MainLayout>
    </>
  );
}

export default HomePage;
