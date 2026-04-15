import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainLayout from "../../components/Layout/Layout";
import Contents from "./components/Contents/Contents";
import Steps from "./components/steps/Steps";
import styles from "./styles.module.scss";

function Cart() {
  const { container } = styles;
  return (
    <>
      <Header />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Contents />
        </MainLayout>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
