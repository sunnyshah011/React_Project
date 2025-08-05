import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"


const R_page = () => {

    const {products} = useContext(ShopContext)
    
  return (
   <div className="w-full p-1 mt-3 overflow-x-auto">
         <div className="flex gap-1" style={{ minWidth: "fit-content" }}>
           {products.slice(10,20).map((product, index) => (
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
  )
}

export default R_page
