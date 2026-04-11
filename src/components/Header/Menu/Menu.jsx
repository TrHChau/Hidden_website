import { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SideBarContext } from "../../../contexts/SlideBarProvider";
import { StoreContext } from "../../../contexts/storeProvider";

function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { useInfo, handleLogOut } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const handleClickShowLogin = () => {
    if (content === "Sign in" && !useInfo) {
      setIsOpen(true);
      setType("login");
    }
  };
  const handleRenderText = (content) => {
    if (content === "Sign in" && useInfo) {
      return `Hello: ${useInfo?.username}`;
    } else {
      return content;
    }
  };
  const handleHover = () => {
    if (content === "Sign in" && useInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)}
      {isShowSubMenu && (
        <div
          onMouseLeave={() => setIsShowSubMenu(false)}
          className={subMenu}
          onClick={handleLogOut}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;
