"use client"
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between py-4 px-4 bg-white/60 backdrop-blur-md w-full">
      {/* Left: Logo */}
      <div className="flex-1 flex items-center">
        <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-black cursor-pointer">
          Campus<span className="text-orange-500">Eats</span>
        </div>
      </div>
      {/* Center: Menu (desktop only) */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-10 lg:space-x-14 text-gray-700 font-light text-lg tracking-wide">
          <li><a href="/" className="hover:text-orange-500 transition-colors cursor-pointer">Home</a></li>
          <li><a href="/menu" className="hover:text-orange-500 transition-colors cursor-pointer">Menu</a></li>
        </ul>
      </div>
      {/* Right: Cart, Login, Sign Up (desktop); Cart, Login (mobile) */}
      <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-6 lg:space-x-8">
        <button
          aria-label="Cart"
          className="cursor-pointer text-orange-500 hover:text-orange-600 transition transition-transform duration-200"
        >
          <i className="fa fa-shopping-cart text-2xl hover:scale-105"></i>
        </button>
        <a href="#" className="text-gray-700 font-light text-base md:text-lg hover:text-orange-500 transition-colors cursor-pointer">Login</a>
        <div className="hidden md:block">
          <Button className="bg-orange-500 text-white px-6 py-2.5 rounded-full shadow-md hover:scale-105 hover:bg-orange-600 transition-transform duration-200 cursor-pointer">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 