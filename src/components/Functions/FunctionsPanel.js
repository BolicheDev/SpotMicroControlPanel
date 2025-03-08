import React from "react";
import FunctionButton from "./FunctionButton";
import { FaPowerOff, FaCog, FaRobot } from "react-icons/fa";

const FunctionsPanel = () => {
  return (
    <div className="border border-cyan-400 p-4 rounded-lg bg-gray-800 shadow-md">
      <h2 className="text-xl font-bold text-cyan-400 text-center mb-4">FUNCTIONS</h2>
      <div className="flex flex-col space-y-4">
        <FunctionButton icon={FaPowerOff} label="Power" />
        <FunctionButton icon={FaCog} label="Settings" />
        <FunctionButton icon={FaRobot} label="Activate AI" />
      </div>
    </div>
  );
};

export default FunctionsPanel;