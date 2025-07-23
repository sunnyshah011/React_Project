import { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  // const [visible, setvisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* <NavLink to='/' ><img src={assets.logo} className='w-36' alt="" /></NavLink> */}
      <img
        onClick={openMenu}
        src={assets.menu_icon}
        className="w-5 cursor-pointer sm:hidden "
        alt=""
      />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className=" flex flex-col items-center gap-1 ">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className=" flex flex-col items-center gap-1 "
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden" />
        </NavLink>
        <NavLink to="/contact" className=" flex flex-col items-center gap-1 ">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className=" flex flex-col items-center gap-1 ">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            10
          </p>
        </Link>

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">My Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
    </div>

    <>
      {/* Menu Icon */}
      {/* <button className="p-4 text-2xl" onClick={openMenu}> &#9776; hamburger icon </button> */}

      {/* Overlay */}
      {isOpen && ( <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40" onClick={closeMenu} ></div> )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${ isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>

        {/* Close Button */}
        <button className="p-4 text-xl" onClick={closeMenu} > &larr; Back </button>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink  to='/' className="text-gray-800 hover:text-blue-500" onClick={closeMenu} >Home</NavLink>
          <NavLink  to='/about' className="text-gray-800 hover:text-blue-500" onClick={closeMenu} >About</NavLink>
          <NavLink  to='/Colletion' className="text-gray-800 hover:text-blue-500" onClick={closeMenu} >Collection</NavLink>
          <NavLink  to='/contact' className="text-gray-800 hover:text-blue-500" onClick={closeMenu} >Contact</NavLink>
        </nav>
      </div>
    </>

    </div>
  );
};

export default Navbar;
