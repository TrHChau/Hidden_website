import { createContext, useEffect, useState } from "react";
import { getProducts } from "../apis/productService";

export const OurShopContext = createContext();
export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    { label: "Default sorting", value: "0" },
    { label: "sort by popularity", value: "1" },
    { label: "sort by average rating", value: "2" },
    { label: "sort by latest", value: "3" },
    { label: "sort by price: low to high", value: "4" },
    { label: "sort by price: high to low", value: "5" },
  ];
  const showOptions = [
    { label: "8", value: "8" },
    { label: "12", value: "12" },
    { label: "All", value: "all" },
  ];
  const [sortId, setSortId] = useState("0");
  const [showId, setShowId] = useState("8");
  const [isShowGrid, setIsShowGrid] = useState(true);
  const [products, setProducts] = useState([]);

  const value = {
    sortOptions,
    showOptions,
    isShowGrid,
    setSortId,
    setShowId,
    setIsShowGrid,
    products,
  };
  useEffect(() => {
    const query = {
      sortType: sortId,
      page: 1,
      limit: showId,
    };

    getProducts(query)
      .then((res) => {
        console.log(res);
        setProducts(res.contents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortId, showId]);
  return (
    <OurShopContext.Provider value={value}>{children}</OurShopContext.Provider>
  );
};
