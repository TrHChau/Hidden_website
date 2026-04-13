import styles from "./styles.module.scss";
import reLoadIcon from "@icon/svgs/reload.svg";
import heartIcon from "@icon/svgs/heart.svg";
import cartIcon from "@icon/svgs/cart.svg";
import cls from "classnames";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import { OurShopContext } from "../../contexts/OurShopProvider";
import Cookies from "js-cookie";
import { SideBarContext } from "../../contexts/SlideBarProvider";
import { ToastContext} from "../../contexts/ToastProvider"  ;
import {addProductToCart} from "../../apis/cartService";
import LoadingTextCommon from "../LoadingTextCommon/LoadingTextCommon";

function ProductItem({
  src,
  prevSrc,
  name,
  prices,
  details,
  isHomePage = true,
}) {
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const [sizeChoose, setSizeChoose] = useState('');
  const userId = Cookies.get("userId"); 
  const {setIsOpen , setType , handleGetListproductCart} = useContext(SideBarContext);
  const {toast} = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

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
    isActiveSize,
    btnClear  
  } = styles;
  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

const handleChooseSize = (size) => {
        setSizeChoose(size);
    };
 const handleClearSize = () => {
        setSizeChoose('');
    };
const handleAddToCart = () => {
  if(!userId){
    setType('login');
    setIsOpen(true);
    toast.warning("You need to login to add product to cart");
    return;
  }
  if(!sizeChoose){
    toast.warning("Please choose size");
    return;
 }
 const data ={
  userId,
  productId: details._id,
  quantity: 1,
  size: sizeChoose
 }

setIsLoading(true);
   addProductToCart(data)
   .then((res) => {
      setIsOpen(true);
      setType('cart');
      toast.success("Add product to cart successfully");
      setIsLoading(false);
      handleGetListproductCart(userId,'cart');
   })
   .catch((err)=>{
      toast.error("Failed to add product to cart");
      setIsLoading(false);
   })

};

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
              <div key={index} className={cls(size,{[isActiveSize]: sizeChoose === item.name})} onClick={() => handleChooseSize(item.name)}>
                {item.name}
              </div>
            ))}
          </div>
        )}
        {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
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
            <Button content={
              isLoading ? (
                    <LoadingTextCommon />
                ):(
                  "Add to cart"
                )
            }
                
             onClick={handleAddToCart} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
