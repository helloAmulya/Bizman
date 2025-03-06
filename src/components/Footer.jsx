import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-800 opacity-30 backdrop-blur-lg"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 relative z-10">
        <div className="mb-6 md:mb-0">
          <h2 className="text-4xl font-extrabold text-blue-400 drop-shadow-lg">
            BizMan
          </h2>
          <p className="text-gray-300 text-sm mt-3 max-w-xs leading-relaxed">
            The future of retail, restaurant, and distribution ERP solutions.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold text-blue-300">Quick Links</h3>
          <ul className="text-gray-400 space-y-3 mt-4 text-center">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-300 ease-in-out hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-300 ease-in-out hover:underline"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-300 ease-in-out hover:underline"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-300 ease-in-out hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-300">Follow Us</h3>
          <div className="flex space-x-6 mt-4">
            <a
              href="#"
              className="hover:text-blue-400 transition-all duration-300 text-2xl"
            >
              🌐
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-all duration-300 text-2xl"
            >
              🐦
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-all duration-300 text-2xl"
            >
              📸
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm border-t border-gray-700 pt-4 relative z-10">
        &copy; {new Date().getFullYear()} BizMan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
