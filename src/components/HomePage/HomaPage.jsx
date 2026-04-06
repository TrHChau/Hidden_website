import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import styles from "./styles.module.scss";
function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;
