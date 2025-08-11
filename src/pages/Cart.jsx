import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { products, currency, cartitem } = useContext(ShopContext);

  const [cartdata, setcartdata] = useState([]);

  useEffect(() => {
    const tempdata = [];
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        if (cartitem[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartitem[items][item],
          });
        }
      }
    }
    setcartdata(tempdata);
  }, [cartitem]);

  return (
    <div className="border-t pt-20">
      <div className="text-2xl mb-3">{/* <Title  /> */}</div>

      <div>
        {cartdata.map((item, index) => {
          const productdata = products.find((product) => product._id === item._id);

          return (
            <div
              key={index}
              className="py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productdata.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xl sm:text-lg font-medium">
                    {" "}
                    {productdata.name}{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
