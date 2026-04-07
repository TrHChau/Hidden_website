import styles from "./styles.module.scss";
import reLoadIcon from "@icon/svgs/reload.svg";
import heartIcon from "@icon/svgs/heart.svg";
import cartIcon from "@icon/svgs/cart.svg";
function ProductItem({ src, prevSrc, name, prices }) {
  const {
    boxImg,
    showImageWhenHover,
    showfuncWhenHover,
    boxIcon,
    title,
    price,
  } = styles;
  return (
    <div>
      <div className={boxImg}>
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
      <div className={title}>{name}</div>
      <div className={price}>${prices}</div>
    </div>
  );
}

export default ProductItem;
