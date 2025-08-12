import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const Cart = () => {
  const { products, currency, cartitem, updateQuantity } =
    useContext(ShopContext);

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
    console.log(tempdata);
  }, [cartitem]);

  return (
    <div className="mt-20 px-4">
      <div className="text-[18px] mb-2">ALL CART ITEMS</div>

      <div>
        {cartdata.map((item, index) => {
          const productdata = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={`${item._id}-${item.size}`}
              className="py-3 border-t-1 text-gray-700 border-gray-400 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productdata.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-[13px] sm:text-lg font-medium">
                    {productdata.name}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-[15px]">
                      {currency} {productdata.price}
                    </p>
                    <p className="px-1 sm:px-3 sm:py-1 text-[13px] border border-gray-300 bg-slate-50">
                      Size : {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                type="number"
                min={1}
                value={item.quantity} // controlled
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= 1) {
                    updateQuantity(item._id, item.size, val);
                  }
                }}
                className="border max-w-12 sm:max-w-20 px-1 sm:px-2 border-gray-300"
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
                srcSet=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
