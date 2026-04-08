import dataMenu from "./constants";
import styles from "./styles.module.scss";
import logo from "@icon/images/logo.png";
function Footer() {
  const { container, boxNav } = styles;
  return (
    <footer className={container}>
      <div>
        <img src={logo} alt="" width={160} height={55} />
      </div>
      <div className={boxNav}>
        {dataMenu.map((item) => (
          <div>{item.content}</div>
        ))}
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Guaranteed safe checkout
        </p>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
          alt=""
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        Copyright © 2024 THC theme. Created by THC
      </div>
    </footer>
  );
}

export default Footer;
