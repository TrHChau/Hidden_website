import styles from "./styles.module.scss";
import { IoCloseOutline } from 'react-icons/io5';
function ItemProduct() {

    const {boxContent, container, title,price,boxClose , size} = styles;

    return ( 
        <div className={container}>
            <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.2-min.jpg" 
            alt="" 
            />
            <div className={boxClose}>
                <IoCloseOutline style={{fontSize:'25px'}} />
            </div>
            <div className={boxContent}>
                <div className={title}>title hahdadadadad</div>
                <div className={size}>Size: M</div>
                <div className={price}>$19.99</div>
                <div className={price}>SKU:1233412</div>
            </div>
        </div>
    );
}

export default ItemProduct;