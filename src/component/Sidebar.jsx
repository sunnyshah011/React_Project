// import { useEffect, useRef } from "react";
// import {
//   HomeIcon,
//   ShoppingCartIcon,
//   CogIcon,
//   XIcon,
// } from "@heroicons/react/outline";

// const categories = [
//   { name: "Home", icon: "🏠" },
//   { name: "Grocery", icon: "🛒" },
//   { name: "Organic Foods", icon: "🌿" },
//   { name: "Laundry", icon: "🧺" },
//   { name: "House Cleaning", icon: "🧹" },
//   { name: "Stationery", icon: "📚" },
//   { name: "Fashion", icon: "👗" },
//   { name: "Cosmetic", icon: "💄" },
//   { name: "Sanitary", icon: "🚽" },
// ];

// export default function Sidebar({ isOpen, onClose }) {
//   const sidebarRef = useRef();

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   // Close if clicked outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//         onClose();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [onClose]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex">
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black opacity-40" />

//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         className="relative z-50 w-[300px] h-full bg-white overflow-y-auto shadow-lg"
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <div className="flex items-center space-x-2">
//             <img
//               src="https://via.placeholder.com/40x40?text=K"
//               alt="Logo"
//               className="h-10 w-10 rounded"
//             />
//             <div className="font-bold text-sm">KHUSHI BAZAR</div>
//           </div>
//           <button onClick={onClose}>
//             <XIcon className="h-6 w-6 text-gray-600" />
//           </button>
//         </div>

//         {/* All Category Button */}
//         <div className="p-4">
//           <button className="w-full bg-red-600 text-white py-2 rounded-lg text-left px-4 font-semibold flex items-center space-x-2">
//             <span className="text-xl">☰</span>
//             <span>All Category</span>
//           </button>
//         </div>

//         {/* Menu */}
//         <nav className="p-2 space-y-1">
//           {categories.map((item) => (
//             <div
//               key={item.name}
//               className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 rounded cursor-pointer"
//             >
//               <div className="flex items-center space-x-3">
//                 <span className="text-xl">{item.icon}</span>
//                 <span className="text-sm font-medium">{item.name.toUpperCase()}</span>
//               </div>
//               <span className="text-gray-500 text-lg">⌄</span>
//             </div>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import Sidebar from "./Sidebar";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen">
//       <header className="p-4 bg-red-600 text-white flex justify-between items-center">
//         <div className="font-bold text-xl">Khushi Bazar</div>
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="bg-white text-red-600 px-3 py-1 rounded"
//         >
//           Open Menu
//         </button>
//       </header>

//       {/* Long content to test scroll */}
//       <div className="p-6 space-y-6">
//         {[...Array(50)].map((_, i) => (
//           <div key={i} className="h-20 bg-gray-100 rounded shadow-inner" />
//         ))}
//       </div>

//       <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//     </div>
//   );
// }
