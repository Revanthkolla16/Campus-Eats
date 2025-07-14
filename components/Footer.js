import React from "react";

const Footer = () => (
  <footer className="w-full bg-black py-10 px-4 mt-16">
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
      {/* Logo/Brand */}
      <div className="text-2xl font-extrabold text-orange-500 tracking-wide">CampusEats</div>
      {/* Copyright */}
      <div className="text-gray-400 text-sm text-center">&copy; {new Date().getFullYear()} CampusEats. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 