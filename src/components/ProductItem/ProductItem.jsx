import styles from "./styles.module.scss";
import reLoadIcon from "@icon/svgs/reload.svg";
import heartIcon from "@icon/svgs/heart.svg";
import cartIcon from "@icon/svgs/cart.svg";
import cls from "classnames";
import Button from "../Button/Button";
import { useContext } from "react";
import { OurShopContext } from "../../contexts/OurShopProvider";
function ProductItem({
  src,
  prevSrc,
  name,
  prices,
  details,
  isHomePage = true,
}) {
  const { isShowGrid } = useContext(OurShopContext);
  const {
    boxImg,
    showImageWhenHover,
    showfuncWhenHover,
    boxIcon,
    title,
    price,
    boxSize,
    size,
    textCenter,
    boxBtn,
    content,
    containerItem,
    leftBtn,
    largImg,
  } = styles;

  return (
    <div className={isShowGrid ? "" : containerItem}>
      <div className={cls(boxImg, { [largImg]: !isShowGrid })}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImageWhenHover} />
        <div className={showfuncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={reLoadIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={isShowGrid ? "" : content}>
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => (
              <div key={index} className={size}>
                {item.name}
              </div>
            ))}
          </div>
        )}
        <div
          className={cls(title, {
            [textCenter]: !isHomePage,
          })}
        >
          {name}
        </div>
        {!isHomePage && (
          <div className={textCenter} style={{ color: "#c1c1c1" }}>
            Brand01
          </div>
        )}
        <div
          className={cls(price, {
            [textCenter]: !isHomePage,
          })}
          style={{ color: isHomePage ? "#333" : "#888" }}
        >
          ${prices}
        </div>
        {!isHomePage && (
          <div className={cls(boxBtn, { [leftBtn]: !isHomePage })}>
            <Button content={"Add to cart"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
