import CountdownBanner from "../CountdownBanner/CountdownBanner";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import MainLayout from "../Layout/Layout";
import styles from "./styles.module.scss";
function HeadingListProduct() {
  const { container, containerItem } = styles;
  // const targetDate = new Date("2026-12-31T23:59:59");
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
