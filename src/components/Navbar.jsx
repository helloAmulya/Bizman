

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setIsVisible(false); // Hide navbar when scrolling down
//       } else {
//         setIsVisible(true); // Show navbar when scrolling up
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full bg-gray-900 shadow-md p-4 z-50 transition-transform duration-300 ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         <h1
//           className="text-2xl font-bold text-blue-600 
//         "
//         >
//           BizMan
//         </h1>

//         <div className="hidden md:flex space-x-6">
//           <a href="#" className="text-gray-700 hover:text-blue-600">
//             Retail
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-600">
//             Restaurant
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-600">
//             Distribution
//           </a>
//         </div>

//         <div className="hidden md:flex space-x-4">
//           <Link
//             to="/login"
//             className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
//           >
//             Log In
//           </Link>
//           <Link
//             to="/signup"
//             className="px-4 py-2 text-white rounded-full hover:bg-blue-700 transition  bg-gray-900 opacity-90"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;






import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-900 shadow-md p-4 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">BizMan</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-200 hover:text-blue-400 transition">
            Retail
          </a>
          <a href="#" className="text-gray-200 hover:text-blue-400 transition">
            Restaurant
          </a>
          <a href="#" className="text-gray-200 hover:text-blue-400 transition">
            Distribution
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 border border-gray-300 text-gray-300 rounded-full hover:bg-gray-300 hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
