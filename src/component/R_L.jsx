import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from './Title'
import Product_Page from "./Product_Page";

const R_L = () => {

    const {products} = useContext(ShopContext)

  return (
    <div className="w-full p-1 mt-3 mb-5 overflow-x-auto bg-purple-600">

       <Title Category="R_D" More="View" />
  
      <div className="mt-4 flex gap-1">
        {products.slice(0,10).map((product, index) => (
          <Product_Page />
        ))}
      </div>
    </div>
  );
};

export default R_L;
