import React from "react";
import styles from "../../styles.module.scss";
import Button from "../../../../components/Button/Button";
import cls from "classnames";
const CartSummary = () => {
  const {
    containerSummary,
    title,
    boxTotal,
    price,
    subTotal,
    total,
    space,
    containerMethods,
    titleMethods,
    containerRight,
    boxImgMethods,
    imgMethods,
    textSecure,
  } = styles;
  const srcMenthod = [
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
  ];
  return (
    <div className={containerRight}>
      <div className={containerSummary}>
        <div className={title}>CART TOTAL</div>
        <div className={cls(boxTotal, subTotal)}>
          <div>Subtotal</div>
          <div className={price}>$1111</div>
        </div>
        <div className={cls(boxTotal, total)}>
          <div>TOTAL</div>
          <div>$1111</div>
        </div>
        <Button content={"Proceed to Checkout"} />
        <div className={space} />
        <Button content={"Continue Shopping"} isPrimary={false} />
      </div>
      <div className={containerMethods}>
        <div className={titleMethods}>
          Guaranteed <span>safe</span> checkout
        </div>

        <div className={boxImgMethods}>
          {srcMenthod.map((item, index) => (
            <img key={index} className={imgMethods} src={item} alt={item} />
          ))}
        </div>
      </div>
      <div className={textSecure}>Your payment is 100% secure</div>
    </div>
  );
};
export default CartSummary;
