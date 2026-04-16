import React from "react";
import styles from "../../styles.module.scss";
import Button from "../../../../components/Button/Button";
import cls from "classnames";
import { SideBarContext } from '../../../../contexts/SlideBarProvider';
import { useContext } from 'react';
import LoadingCart from '../Loading';
const CartSummary = () => {
  const {
    containerSummary,
    title,
    boxTotal,
    price,
    subTotal,
    totals,
    space,
    containerMethods,
    titleMethods,
    containerRight,
    boxImgMethods,
    imgMethods,
    textSecure,
  } = styles;
  const { listProductCart,isLoading} = useContext(SideBarContext);
  const srcMenthod = [
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
  ];
    const total = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
  return (
    <div className={containerRight}>
      <div className={containerSummary}>
        <div className={title}>CART TOTAL</div>
        <div className={cls(boxTotal, subTotal)}>
          <div>Subtotal</div>
          <div className={price}>${total}</div>
        </div>
        <div className={cls(boxTotal, totals)}>
          <div>TOTAL</div>
          <div>${total}</div>
        </div>
        <Button content={"Proceed to Checkout"} />
        <div className={space} />
        <Button content={"Continue Shopping"} isPrimary={false} />
         {isLoading && <LoadingCart />}
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
