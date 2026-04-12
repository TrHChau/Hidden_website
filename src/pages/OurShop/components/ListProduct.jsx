import { useContext } from "react";
import MainLayout from "../../../components/Layout/Layout";
import { OurShopContext } from "../../../contexts/OurShopProvider";
import styles from "../styles.module.scss";
import ProductItem from "../../../components/ProductItem/ProductItem";

function ListProduct() {
  const { products, isShowGird } = useContext(OurShopContext);
  const { containerProduct } = styles;
  console.log(products);
  return (
    <>
      <MainLayout>
        <div className={!isShowGird ? containerProduct : ""}>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              prices={item.price}
              details={item}
              isHomePage={false}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default ListProduct;
