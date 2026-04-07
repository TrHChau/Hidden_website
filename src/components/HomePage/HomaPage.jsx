import AdvanceHealing from "../AdvanceHealing/AdvanceHealing";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

import Info from "../Info/Info";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";
function HomePage() {
  return (
    <div>
      <Header />

      <Banner />
      <Info />
      <AdvanceHealing />
      <HeadingListProduct />
      <div style={{ height: "200px" }}>dsadaw</div>
    </div>
  );
}

export default HomePage;
