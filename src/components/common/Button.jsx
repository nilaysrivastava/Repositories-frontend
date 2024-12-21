import React from "react";

const Button = ({ label, onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm 
        flex items-center justify-center transition-colors duration-200 
        ${className}`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
