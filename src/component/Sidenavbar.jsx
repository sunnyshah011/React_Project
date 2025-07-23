import React, { useState, useEffect } from 'react';

function Sidenavbar() {
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
    <div>
      {/* Menu Icon */}
      <button className="p-4 text-2xl" onClick={openMenu}> &#9776; {/* hamburger icon */} </button>

      {/* Overlay */}
      {isOpen && ( <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40" onClick={closeMenu} ></div> )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${ isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>

        {/* Close Button */}
        <button className="p-4 text-xl" onClick={closeMenu} > &larr; Back </button>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Services</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Sidenavbar;
