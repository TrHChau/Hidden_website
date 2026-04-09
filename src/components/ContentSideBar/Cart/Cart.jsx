import { PiShoppingCartLight } from 'react-icons/pi';
import HeaderSideBar from "../components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import ItemProduct from "../components/HeaderSideBar/ItemProduct/ItemProduct";
import Button from "../../Button/Button";

function Cart() {
     const { container,boxBtn,total} = styles;
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
        <ItemProduct />
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