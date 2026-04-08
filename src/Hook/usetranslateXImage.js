import useScrollHandling from "./useScrollHandling";
import { useState, useEffect } from "react";
const usetranslateXImage = () => {
  const { scrollPosition, scrollDriction } = useScrollHandling();
  const [tranlateXPosition, setTranlateXPosition] = useState(80);

  const handleTranslateX = () => {
    if (scrollDriction === "down" && scrollPosition >= 1500) {
      setTranlateXPosition(tranlateXPosition <= 0 ? 0 : tranlateXPosition - 1);
    } else if (scrollDriction === "up") {
      setTranlateXPosition(
        tranlateXPosition >= 80 ? 80 : tranlateXPosition + 1,
      );
    }
  };

  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return {
    tranlateXPosition,
  };
};
export default usetranslateXImage;
