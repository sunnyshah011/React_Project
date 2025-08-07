import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Product_Page from '../component/Product_Page';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])

  useEffect(() => {
        setFilterProducts(products)
  }, [])
  
  console.log(products);
  console.log(filterProducts);
  
  
  return (
    <div className=' flex flex-col sm:flex-row gap-1 sm:gap-10 mt-20 px-2' >

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(pre=>!pre)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdown_icon}/>
        </p>
        {/* Category Filer */}
        <div className={` border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?'':'hidden'} sm:block`} >
            <p className='mb-3 text-sm font-medium' >CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
              <p className='flex gap-2 text-sm font-medium'>
                <input type="checkbox" className='w-3' value={'CATEGOR 1'} />CATEGORY 1
              </p>
              <p className='flex gap-2 text-sm font-medium'>
                <input type="checkbox" className='w-3' value={'CATEGORY 2'} />CATEGORY 2
              </p>
              <p className='flex gap-2 text-sm font-medium'>
                <input className='w-3' type="checkbox"  value={'CATEGORY 3'} />CATEGORY 3
              </p>
            </div>
        </div>
        {/* subCategory Filter */}
          <div className={` border border-gray-300 pl-5 py-3 my-5 ${showFilter ?'':'hidden'} sm:block`} >
            <p className='mb-3 text-sm font-medium' >SUB CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
              <p className='flex gap-2 text-sm font-medium'>
                <input type="checkbox" className='w-3' value={'SUB CATEGORY 1'} />SUB CATEGORY 1
              </p>
              <p className='flex gap-2 text-sm font-medium'>
                <input type="checkbox" className='w-3' value={'SUB CATEGORY 2'} />SUB CATEGORY 2
              </p>
              <p className='flex gap-2 text-sm font-medium'>
                <input className='w-3' type="checkbox"  value={'SUB CATEGORY 3'} />SUB CATEGORY 3
              </p>
            </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1' >
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <p>ALL COLLECTION</p>
            {/* Product Sort */}
            <select className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevent">Relavent</option>
              <option value="low-high">Low-High</option>
              <option value="high-low">High-Low</option>
            </select>
          </div>

    {/* Map Products */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
      {
        filterProducts.map((item,index)=>(
          <Product_Page key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))
      }
    </div>

      </div>
    </div>
  )
}

export default Collection