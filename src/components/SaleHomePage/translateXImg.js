import { useState, useRef, useEffect } from "react";
const useTranslateXImg = () => {
  const [scrollDriction, setScrollDriction] = useState(null);
  const [tranlateXPosition, setTranlateXPosition] = useState(80);
  const [scrollPosition, setScrollPosition] = useState(0);
  const prev = useRef(0);
  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > prev.current) {
      setScrollDriction("down");
    } else if (currentScrollPosition < prev.current) {
      setScrollDriction("up");
    }
    prev.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };
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
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);
  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return {
    tranlateXPosition,
    handleTranslateX,
    scrollPosition,
  };
};
export default useTranslateXImg;
