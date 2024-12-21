import React from "react";

const InputField = ({ placeholder, value, onChange, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`py-2 px-4 rounded-md border focus:outline-none ${className}`}
    />
  );
};

export default InputField;
