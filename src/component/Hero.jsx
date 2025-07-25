import React from "react";

import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-black flex flex-col p-3 ">
      <div className="w-full h-[60vh] bg-blue-400 flex flex-col p-3 items-center justify-center " >
        <div className="w-[30%] h-[60%] bg-red-400 " >
          <img src={assets.spiderman} alt="" srcset="" className=" w-full h-full object-cover " />
        </div>
      </div>

      <div className='w-full h-[20vh] bg-orange-400' >
                 
      </div>
    </div>
  );
};

export default Hero;
