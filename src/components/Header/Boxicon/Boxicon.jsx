import styles from "../styles.module.scss";
import fbIcon from "@icon/svgs/face.svg";
import insIcon from "@icon/svgs/insta.svg";
import ytIcon from "@icon/svgs/youtube.svg";
function Boxixon({ type, href }) {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return insIcon;
      case "ytb":
        return ytIcon;
    }
  };

  return (
    <>
      <div className={boxIcon}>
        <img src={handleRenderIcon(type)} alt={type} />
      </div>
    </>
  );
}
export default Boxixon;
