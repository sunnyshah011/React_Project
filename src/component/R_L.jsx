import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const R_L = () => {

    const {products} = useContext(ShopContext)

  return (
    <div className="w-full p-1 mt-3 mb-5 overflow-x-auto bg-purple-600">
      <div className="flex gap-1" style={{ minWidth: "fit-content" }}>
        {products.slice(0,10).map((product, index) => (
          <div key={index} className="w-[33vw] aspect-square bg-white flex-shrink-0 rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default R_L;
