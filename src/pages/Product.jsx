import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [fproduct, setfproduct] = useState([]);
  const [image, setimage] = useState("");

  const filterproduct = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setfproduct(item);
        setimage(item.image[0]);
        console.log(item);
        console.log(image);
      }
    });
  };

  useEffect(() => {
    filterproduct();
  }, [productId, products]);

  return (
    <div className="mt-15 w-full bg-green-400 min-h-screen px-2 py-5">
      {fproduct.name}
      {<img src={image} alt="" srcset="" />}
    </div>
  );
};

export default Product;
