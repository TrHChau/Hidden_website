import { useContext } from "react";
import {SideBarContext} from '../../../contexts/SlideBarProvider'
import styles from './styles.module.scss'
import SliderCommon from "../../SliderCommon/SliderCommon";


function DetailProduct() {
    const {container} = styles;
    const {detailProduct} = useContext(SideBarContext)
    
    console.log(detailProduct)
    return ( <div className={container}>
       <SliderCommon/>
    </div> );
}

export default DetailProduct;