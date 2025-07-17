import React from "react";

const Footer = () => (
  <footer className="w-full bg-black py-10 px-4">
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      {/* Logo/Brand */}
      <div className="text-2xl font-extrabold text-orange-500 tracking-wide">CampusEats</div>
      {/* Copyright */}
      <div className="text-gray-400 text-sm text-center w-full">&copy; {new Date().getFullYear()} CampusEats. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 