import React from "react";

const FunctionButton = ({ icon: Icon, label }) => {
  return (
    <button className="bg-gray-900 border border-blue-500 p-4 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-blue-500 hover:text-black transition duration-300 w-full">
      <Icon size={24} />
      <span className="text-lg font-semibold">{label}</span>
    </button>
  );
};

export default FunctionButton;