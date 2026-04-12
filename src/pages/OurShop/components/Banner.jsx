import Button from "../../../components/Button/Button";
import CountdownTimer from "../../../components/CountdownTimer/CountdownTimer";
import { OurShopContext } from "../../../contexts/OurShopProvider";
import styles from "../styles.module.scss";
function Banner() {
  const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;

  return (
    <>
      <div className={containerBanner}>
        <div className={contentBox}>
          {" "}
          <div className={countDownBox}>
            <CountdownTimer targetDate="2026-12-31T23:59:59" />
          </div>
          <div className={title}>The Classics Make A ComeBack</div>
          <div className={boxBtn}>
            <Button content={"Buy now"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
