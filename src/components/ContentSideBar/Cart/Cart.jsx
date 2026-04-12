import { PiShoppingCartLight } from 'react-icons/pi';
import HeaderSideBar from "../components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import ItemProduct from "../components/HeaderSideBar/ItemProduct/ItemProduct";
import Button from "../../Button/Button";
import { useContext } from 'react';
import { SideBarContext } from '../../../contexts/SlideBarProvider';
function Cart() {
     const { container,boxBtn,total} = styles;

    const {listProductCart} =useContext(SideBarContext );


    return ( 
    <div className={container}>
        <div>
        <HeaderSideBar icon={
                        <PiShoppingCartLight
                            style={{
                                fontSize: '30px'
                            }}
                        />
                    } title="CART" />

        {listProductCart.map((item,index) => {
            return <ItemProduct key={item._id || item.id || index} 
            src={item.images[0]}
            nameProduct={item.name}
            priceProduct={item.price}
            skuProduct={item.sku}
            sizeProduct={item.size}
            quantity={item.quantity}
            />
        })}
        </div> 
        <div>
            <div className={total}>
                <p>SUBTOTAL: </p>
                <p>$ 123.00</p>
            </div>
          
            <div className={boxBtn}>
            <Button content={'VIEW WISHLIST'}/>
            <Button content={'CHECKOUT'} isPrimary={false}  />
            </div>
        </div>
    </div>
    
    );
}

export default Cart;