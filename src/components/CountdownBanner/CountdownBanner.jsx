import Button from "../Button/Button";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
function CountdownBanner() {
  const { container, containerTimer, title, boxBtn } = styles;
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate="2026-12-31T23:59:59" />
      </div>
      <p className={title}>The Classic Make A Comeback</p>
      <div className={boxBtn}>
        <Button content={"Buy now"} />
      </div>
    </div>
  );
}

export default CountdownBanner;
