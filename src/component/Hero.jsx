import React from "react";
import { useState } from "react";

import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {

  const [search, setSearch] = useState("");

  return (
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh]  flex flex-col py-3 px-1 ">
        <div className="w-full h-[50vh]  flex flex-col items-center justify-center " >
          <div className="w-50 sm:w-60 md:w-65 lg:w-70 xl:w-75 aspect-square bg-red-400 overflow-hidden rounded-full">
            <img
              src={assets.nightmare}
              alt="Hero image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className='w-full h-[10vh] flex justify-center  items-center' >
          <div className=" text-[26px] sm:text-4xl md:text-5xl lg:text-6xl  text-center min-[370px]:text-[31px] font-poppins font-semibold ">
            FISHING TACKLE STORE
          </div>
        </div>

        <div className='w-full h-[10vh]  flex justify-center items-center min-[583px]:items-start md:pt-2  ' >
          <div className="text-center text-[15px] sm:text-5 px-5 max-[320px]:text-[10px] leading-4.5 font-normal ">
            Find durable, reliable fishing products for beginners and experienced anglers.
          </div>
        </div>
      </div>
      
  )
};

export default Hero;

{/* search bar for mobile screen  */}
      {/* <div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="pl-5 py-1.5 w-full bg-amber-50 rounded-3xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-200 min-[640px]:hidden"
          />
        </div>
      </div> */}