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
        <img
          src="	https://cdn.hstatic.net/products/1000306633/tqc00258_3d45aee158094104858e4055df2ae031_large.jpg"
          alt=""
        />
        <img
          src="	https://cdn.hstatic.net/products/1000306633/hades__18_c12aa8dde7e54bc8a1fbf16bbbe8499a_large.jpg"
          alt=""
          className={showImageWhenHover}
        />
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
      <div className={title}>10K yellow glod</div>
      <div className={price}>$99.99</div>
    </div>
  );
}

export default ProductItem;
