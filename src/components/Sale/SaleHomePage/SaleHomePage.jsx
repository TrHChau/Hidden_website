import usetranslateXImage from "../../../Hook/usetranslateXImage";
import Button from "../../Button/Button";
import styles from "./styles.module.scss";

function SaleHomePage() {
  const { container, title, des, boxBtn, boxImg } = styles;
  const { tranlateXPosition } = usetranslateXImage();

  return (
    <div className={container}>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${tranlateXPosition}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-8.2-min.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p className={des}>
          Libero sed faucibus fascilisis fermentum. Est nibh sed massa sodales
        </p>
        <div className={boxBtn}>
          <Button content={"Read more"} isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImg}
        style={{
          transform: `translateX(-${tranlateXPosition}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-5.3-min.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SaleHomePage;
