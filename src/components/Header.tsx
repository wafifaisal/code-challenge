"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-0 w-full justify-center items-center p-6 bg-white shadow-lg z-50 transition-transform transform duration-300 ease-in-out hover:shadow-xl">
        <div className="flex space-x-6">
          <Link
            href="/"
            className={`relative p-2 px-4 group font-mono transition-colors duration-300 ${
              pathname === "/" ? "text-black" : "text-gray-500 hover:text-black"
            }`}
          >
            HOME
            <div
              className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
                pathname === "/" ? "w-full" : ""
              } bg-black`}
            ></div>
          </Link>
          <Link
            href="/about"
            className={`relative p-2 px-4 group font-mono transition-colors duration-300 ${
              pathname === "/about"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            ABOUT US
            <div
              className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
                pathname === "/about" ? "w-full" : ""
              } bg-black`}
            ></div>
          </Link>
        </div>

        <div className="flex flex-col items-center mx-8 space-x-2 transition-transform transform duration-300 hover:scale-110">
          <Image src="/download.png" alt="Brand Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-[rgb(153,107,83)]">FLÉUR</h1>
        </div>

        <div className="flex space-x-6">
          <Link
            href="/products"
            className={`relative p-2 px-4 group font-mono transition-colors duration-300 ${
              pathname === "/products"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            PRODUCTS
            <div
              className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
                pathname === "/products" ? "w-full" : ""
              } bg-black`}
            ></div>
          </Link>
          <Link
            href="/custom"
            className={`relative p-2 px-4 group font-mono transition-colors duration-300 ${
              pathname === "/custom"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            CUSTOMIZE
            <div
              className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
                pathname === "/custom" ? "w-full" : ""
              } bg-black`}
            ></div>
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex md:hidden fixed top-0 w-full justify-between items-center p-4 bg-white shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <Image src="/download.png" alt="Brand Logo" width={30} height={30} />
          <h1 className="text-xl font-bold text-[rgb(153,107,83)]">FLÉUR</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-gray-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Background Overlay and Mobile Menu */}
        {isOpen && (
          <>
            {/* Semi-transparent overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setIsOpen(false)} // Close menu on overlay click
            ></div>

            {/* Mobile Menu Dropdown */}
            <div className="absolute top-16 left-4 right-4 bg-white rounded-lg shadow-xl z-50 flex flex-col items-center space-y-4 py-4 px-6">
              {["/", "/about", "/products", "/custom"].map((path, index) => (
                <Link
                  key={index}
                  href={path}
                  className={`block text-lg font-mono transition-colors duration-300 ${
                    pathname === path
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {path.replace("/", "").toUpperCase() || "HOME"}
                </Link>
              ))}
            </div>
          </>
        )}
      </header>

      {/* To prevent content from being hidden under the navbar */}
      <div className="pt-24"></div>
    </>
  );
};

export default Header;
