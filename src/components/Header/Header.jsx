import Boxicon from "./Boxicon/Boxicon";
import { dataBoxIcon, dataMenu } from "./constants";
import styles from "./styles.module.scss";
import Menu from "./Menu/Menu";
import logo from "@icon/images/logo.png";
import reLoadIcon from "@icon/svgs/reload.svg";
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import heartIcon from "@icon/svgs/heart.svg";
import cartIcon from "@icon/svgs/cart.svg";
import useScrollHandling from "../../Hook/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "../../contexts/SlideBarProvider";
function Header() {
  const { containerBoxIcon } = styles;
  const {
    containerMenu,
    containerHeader,
    containerBox,
    container,
    topHeader,
    fixedHeader,
  } = styles;
  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);
  const {setIsOpen ,setType} = useContext(SideBarContext);


  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    // if (scrollPosition > 80) {
    //   setFixedPosition(true);
    // } else {
    //   setFixedPosition(false);
    // }
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);
  return (
    <>
      <div
        className={classNames(container, topHeader, {
          [fixedHeader]: fixedPosition,
        })}
      >
        <div className={containerHeader}>
          <div className={containerBox}>
            <div className={containerBoxIcon}>
              {dataBoxIcon.map((icon) => (
                <Boxicon key={icon.id} type={icon.type} href={icon.href} />
              ))}
            </div>
            <div className={containerMenu}>
              {dataMenu.slice(0, 3).map((item) => {
                return <Menu content={item.content} href={item.href} />;
              })}
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "300px",
                height: "70px",
              }}
            />
          </div>
          <div className={containerBox}>
            <div className={containerMenu}>
              {dataMenu.slice(3, dataMenu.length).map((item) => {
                return (
                  <Menu
                    content={item.content}
                    href={item.href}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
            </div>
            <div className={containerBoxIcon}>
            <TfiReload
              style={{
                fontSize: '20px',

              }}
              onClick={() => handleOpenSideBar('compare')}
            />
             <BsHeart
              style={{
                fontSize: '20px',
              }}
              onClick={() => handleOpenSideBar('wishlist')}
            />
            <PiShoppingCart
            style={{
                fontSize: '20px',
              }}
              onClick={() => handleOpenSideBar('cart')}
              />
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
