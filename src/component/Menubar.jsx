import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Menubar = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full flex justify-between items-center">
        <div>Category</div>

        <div className="flex items-center gap-2 ">
          All Products
          <div>
            <img src={assets.dropdown_icon} alt="" className="w-2 mt-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
