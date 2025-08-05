import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Category = () => {
  return (
    <div className="w-full min:h-[50vh] mt-4">
      <div className="grid grid-cols-2 gap-2 p-1 min-[850px]:grid-cols-4">
        <div className=" w-full h-[25vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.reel}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            REEL
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            REEL
          </p>
        </div>
        <div className=" w-full h-[25vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.accessories}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            ACCESSORIES
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            ACCESSORIES
          </p>
        </div>
        <div className=" w-full h-[25vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.comboset}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            COMBO SET
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            COMBO SET
          </p>
        </div>
        <div className=" w-full h-[25vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.rod}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            ROD
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            ROD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
