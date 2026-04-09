import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "../../contexts/SlideBarProvider";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import Login from "../ContentSideBar/Login/Login";
import Compare from "../ContentSideBar/Compare/Compare";
import WishList from "../ContentSideBar/WishList/WishList";
import Cart from "../ContentSideBar/Cart/Cart";
function SideBar() {
  const { overPlay, sideBar, container, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handlToggle = () => {
    setIsOpen(!isOpen);
  };

 const handleRenderContent = () => {
    switch (type) {
      case "login":
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <WishList />;
      case 'cart':
        return <Cart />;
      default:
        return <Login />;
    }
 };
  return (
    <div className={container}>
      <div
        className={classNames({
          [overPlay]: isOpen,
        })}
        onClick={handlToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handlToggle}>
            <IoCloseOutline />
          </div>
        )}
        {handleRenderContent()}
      </div>
    </div>
    
  );
}

export default SideBar;
