import React, { useContext, useEffect, useState, createContext, use } from "react";
import { authDataContext } from "./authContext";
import { userDataContext } from "./userContext";
import axios from "axios";



export const shopDataContext = createContext();

function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  const { serverUrl } = useContext(authDataContext);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const {userData} = useContext(userDataContext);

  const currency = "₹";
  const deliveryCharge = 20;

  const getProducts = async () => {
    try {
      const response = await fetch(`${serverUrl}/product/list`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = async(itemsId, size) => {
    if(!size){
      console.log("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItems)

    if(cartData[itemsId]){
      if(cartData[itemsId][size]){
        cartData[itemsId][size] += 1;
      } else {
        cartData[itemsId][size] = 1;
      } 
    } else {
      cartData[itemsId] = {};
      cartData[itemsId][size] = 1;
    }
    setCartItems(cartData);

    if(userData){
      try {
        await axios.post(`${serverUrl}/add`, {itemsId, size}, { withCredentials: true });
      } catch (err) {
        console.log("Add to cart error", err);
      }

    };
  
  };

  const getCartCount = () => {
    let count = 0;
    for(const itemId in cartItems){
      for(const size in cartItems[itemId]){
        try{

          if(cartItems[itemId][size] > 0){
           count += cartItems[itemId][size];
          }
      }
    catch(e){
      console.error("Error calculating cart count:", e);
    }
      }
    }
    return count;
  }

  useEffect(() => {
    getProducts();
  }, []);

  const value = {
    products,
    currency,
    deliveryCharge,
    getProducts,
    search,
    setSearch,
    showSearch, 
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    setCartItems
  };

  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
}

export default ShopContext;
