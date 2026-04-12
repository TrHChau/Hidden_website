import { useContext } from "react";
import MainLayout from "../../../components/Layout/Layout";
import { OurShopContext } from "../../../contexts/OurShopProvider";
import styles from "../styles.module.scss";
import ProductItem from "../../../components/ProductItem/ProductItem";
import Button from "../../../components/Button/Button";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import LoadingTextCommon from "../../../components/LoadingTextCommon/LoadingTextCommon";

function ListProduct() {
  const { products, isShowGrid ,isLoading, handleLoadMore,total,isLoadMore} = useContext(OurShopContext);
  const { containerProduct , sectionListProduct, rotate} = styles;
  return (
    <div className={sectionListProduct}>
      <MainLayout>
        {isLoading ? <>Loading...</>:
        <>
        <div className={isShowGrid ? containerProduct : ""}>
          {products.map((item) => (
            <ProductItem
              key={item._id || item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              prices={item.price}
              details={item}
              isHomePage={false}
            />
          ))}
        </div>
          {products.length < total && (
            <div style={{
            width: '180px',
            margin: '50px auto'
          }}>
            <Button
             content={isLoadMore ? (
             <LoadingTextCommon />) 
             : ('LOAD MORE PRODUCT')} 
             onClick={handleLoadMore}/>
          </div>
          )
          }
          
          </>
        }
      </MainLayout>
    </div>
  );
}

export default ListProduct;
