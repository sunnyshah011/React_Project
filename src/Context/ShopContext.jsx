import { createContext, useState, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Rs.";
  const delivery_fee = 200;
  const [cartitem, setcartitem] = useState({});
  const navigate = useNavigate()

  const addtocart = async (itemId, size) => {
    if (!size) {
      toast.error("SELECT PRODUCT SIZE!");
      return;
    }
    // if (itemId && size) {
    //   toast.info("Product Added To Cart");
    // }
    let cartdata = structuredClone(cartitem);
    if (cartdata[itemId]) {
      if (cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      } else {
        cartdata[itemId][size] = 1;
      }
    } else {
      cartdata[itemId] = {};
      cartdata[itemId][size] = 1;
    }
    setcartitem(cartdata);
    console.log(cartitem);
  };

  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            totalcount += cartitem[items][item];
          }
        } catch (error) {
          console.log(error.getMessage());
        }
      }
    }
    return totalcount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartdata = structuredClone(cartitem)
    cartdata[itemId][size] = quantity;
    setcartitem(cartdata)
  }


  const calculatetotalamount = () => {
    let totalamount = 0;
    for (const items in cartitem) {
      const cartinfo = products.find((product) => product._id === items)
      for (const item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            totalamount += cartinfo.price * cartitem[items][item]
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalamount
  }

  const value = {
    products,
    currency,
    delivery_fee,
    cartitem,
    addtocart,
    getcartcount,
    updateQuantity,
    calculatetotalamount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
export { ShopContext };
