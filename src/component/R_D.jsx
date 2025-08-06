import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from './Title'
import Product_Page from "./Product_Page"


const R_D = () => {

    const {products} = useContext(ShopContext)
    
  return (
   <div className="w-full p-1 mt-3 overflow-x-auto bg-blue-600">
   <Title Category="R_D" More="View" />
         <div className="mt-4 flex gap-1">
           {products.slice(10,20).map((product, index) => (
             <Product_Page />
           ))}
         </div>
       </div>
  )
}

export default R_D
