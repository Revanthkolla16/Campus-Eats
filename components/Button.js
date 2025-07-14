import React from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`font-semibold rounded-full shadow-md transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-orange-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button; 