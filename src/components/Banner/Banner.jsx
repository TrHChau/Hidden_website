import Button from "../Button/Button";
import styles from "./styles.module.scss";
function Banner() {
  const { container ,containerBtn} = styles;
  return (
    <>
      <div className={container}>
      <div className={containerBtn}>
          <Button content={"Go to shop ➔"} />
      </div>
      
      </div>
    </>
  );
}

export default Banner;
