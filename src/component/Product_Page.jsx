import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { Link } from "react-router-dom"

const Product_Page = ({ id, name, price, image }) => {

  const { currency } = useContext(ShopContext)

  return (
    <Link className="text-gray-700 cursor-pointer rounded-[10px] " to={`/product/${id}`} >
      <div className="overflow-hidden" >
        <img src={image[0]} alt="" className="hover:opacity-90 transition ease-in-out rounded-[10px]"/>
      </div>
      <p className="pt-3 pb-1 pl-1 text-sm line-clamp-1" > {name} </p>
      <p className="pl-2 text-[16px] font-semibold truncate" > {currency} {price} /- </p>
    </Link>
  )
}
export default Product_Page
