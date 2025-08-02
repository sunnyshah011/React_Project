import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Category = () => {
    return (
        <div className="flex items-center justify-center mt-7 px-4">
            <div className="sm:flex flex-wrap gap-4 justify-between">
                <div>
                    <div className="w-[150px] sm:w-[140px] md:w-[150px] h-[130px] bg-fuchsia-400 flex items-center justify-center text-white font-bold rounded-md shadow-md">
                        Reel
                    </div>
                    <div className="w-[150px] sm:w-[140px] md:w-[150px] h-[130px] bg-blue-400 flex items-center justify-center text-white font-bold rounded-md shadow-md">
                        Rod
                    </div>
                </div>
                <div>
                    <div className="w-[150px] sm:w-[140px] md:w-[150px] h-[130px] bg-red-400 flex items-center justify-center text-white font-bold rounded-md shadow-md">
                        Accessories
                    </div>
                    <div className="w-[150px] sm:w-[140px] md:w-[150px] h-[130px] bg-green-400 flex items-center justify-center text-white font-bold rounded-md shadow-md">
                        Combo Set
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
