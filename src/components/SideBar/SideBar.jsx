import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "../../contexts/SlideBarProvider";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import Login from "../ContentSideBar/Login/Login";
function SideBar() {
  const { overPlay, sideBar, container, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const handlToggle = () => {
    setIsOpen(!isOpen);
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
        <Login/>
      </div>
    </div>
    
  );
}

export default SideBar;
