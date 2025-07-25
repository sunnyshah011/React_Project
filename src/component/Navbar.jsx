import { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  // Lock scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between py-5 px-4 font-medium relative z-50">
      {/* Logo (optional) */}
      {/* <NavLink to="/"><img src={assets.logo} className="w-36" alt="Logo" /></NavLink> */}

      {/* Mobile menu icon */}
      <img
        onClick={openMenu}
        src={assets.menu_icon}
        className="w-5 cursor-pointer min-[850px]:hidden"
        alt="Menu"
      />
   {search}
      <div>
        <div>
           <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-15 py-1.5 rounded-3xl border border-gray-300 focus:outline-none focus:ring-1
           focus:ring-blue-500 focus:border-blue-500 transition duration-200 hidden sm:block"
        />
        </div>
      </div>

      {/* Desktop nav links */}
      <nav className="hidden min-[850px]:flex md:gap-6 lg:gap-12 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          Home
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          Collection
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          Contact
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          About
        </NavLink>
      </nav>

      {/* Right side icons */}
      <div className="flex items-center gap-7">
        {/* <img
          src={assets.search_icon}
          className="w-5.5 cursor-pointer"
          alt="Search"
        /> */}

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5.5" alt="Cart" />
          <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </span>
        </Link>

        <div className="relative">
          <p onClick={() => setShow((pre) => !pre)}>
            <img
              src={assets.profile_icon}
              className="w-5.5 cursor-pointer"
              alt="Profile"
            />
          </p>
          <div
            className={`absolute right-0 pt-4 ${show ? "block" : "hidden"} `}
          >
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">My Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar & overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeMenu}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button className="p-4 text-xl" onClick={closeMenu}>
          {" "}
          &larr; Back{" "}
        </button>

        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-gray-800 hover:text-blue-500 flex gap-3 items-center "
          >
            <i className="block" class="fa fa-home"></i>
            <p className="text-[20px]">Home</p>
          </NavLink>
          <NavLink to="/" onClick={closeMenu} className="text-gray-800 hover:text-blue-500 flex gap-3 items-center ">
          <i className="block" class="fa fa-home"></i>
          <p className="text-[20px]" >Collection</p>
          </NavLink>
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-gray-800 hover:text-blue-500 flex gap-3 items-center "
          >
            <i className="block" class="fa fa-address-card"></i>
            <p className="text-[20px]">About</p>
          </NavLink>
          <NavLink to="/" onClick={closeMenu} className="text-gray-800 hover:text-blue-500 flex gap-3 items-center ">
          <i className="block" class="fa fa-home"></i>
          <p className="text-[20px]" >Contact</p>
          </NavLink>
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-gray-800 hover:text-blue-500 flex gap-3 items-center "
          >
            <i className="block" class="fa fa-home"></i>
            <p className="text-[20px]">Location</p>
          </NavLink>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;
