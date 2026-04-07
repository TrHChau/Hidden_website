import AdvanceHealing from "../AdvanceHealing/AdvanceHealing";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import styles from "./styles.module.scss";
import Info from "../Info/Info";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";
function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHealing />
        <HeadingListProduct />
      </div>
    </div>
  );
}

export default HomePage;
