import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { Link } from "react-router-dom"

const Product_Page = ({ id, name, price, image }) => {

  const { currency } = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`} >
      <div className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden" >
          <img src={image[0]} alt="" className="hover:scale-110 transition ease-in-out" />
        </div>

        <p className="pt-3 pb-1 text-sm line-clamp-1" > {name} </p>
        <p className="text-sm font-medium truncate" > {currency} {price} </p>
      </div>
    </Link>
  )
}

export default Product_Page
