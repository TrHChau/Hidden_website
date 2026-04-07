import CountdownBanner from "../CountdownBanner/CountdownBanner";
import MainLayout from "../Layout/Layout";
import styles from "./styles.module.scss";

function HeadingListProduct() {
  const { container, containerItem } = styles;
  // const targetDate = new Date("2026-12-31T23:59:59");
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}></div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
