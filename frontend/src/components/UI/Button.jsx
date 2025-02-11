import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`bg-purple-600 px-6 py-2 rounded-lg ${className}`}>
      {text}
    </button>
  );
};

export default Button;
