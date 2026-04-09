import HeaderSideBar from "../components/HeaderSideBar/HeaderSideBar";
import { TfiReload } from 'react-icons/tfi';
import styles from "./styles.module.scss";
import ItemProduct from "../components/HeaderSideBar/ItemProduct/ItemProduct";
import Button from "../../Button/Button";
function Compare() {
    const {container,boxContent} = styles;
    return (
        <div className={container}>
            <div className={boxContent}> 
            <HeaderSideBar icon={<TfiReload style={{fontSize:'30px'}} />} title="COMPARE" />
            <ItemProduct/>
            </div>

            <div style={{marginLeft:'60px'}}>
                <Button content={'VIEW COMPARE'}/>
            </div>
        </div>
    );
}

export default Compare;