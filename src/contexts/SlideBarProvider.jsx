import { createContext, useState ,useEffect} from "react";
import { getCart } from '../apis/cartService';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type,setType] = useState("");
  const [listProductCart, setListProductCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  const userId = Cookies.get("userId");
  
  const handleGetListproductCart = (userId, type) => {
    if(userId && type === 'cart'){
      setIsLoading(true);
      getCart(userId)
      .then((res) => {
        setIsLoading(false);
      setListProductCart(res.data.data);
      })
      .catch((err) => {
        
        setListProductCart([]);
        setIsLoading(false);
      });
    }
  }

 const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    handleGetListproductCart,
    listProductCart,
    setListProductCart,
    isLoading,
    setIsLoading,
    detailProduct,
    setDetailProduct,
    userId   
  };

  useEffect(() => {
    handleGetListproductCart(userId, 'cart');
  }, [userId]);

  return (
    <SideBarContext.Provider value={value}>
     {children}
    </SideBarContext.Provider>
  );
};
