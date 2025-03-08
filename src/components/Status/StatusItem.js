import React from "react";

const StatusItem = ({ label, value }) => {
  return (
    <div>
      <span className="text-sm text-blue-300">{label}</span>
      <div className="w-full bg-gray-700 h-2 rounded mt-1 overflow-hidden">
        <div className="h-full bg-cyan-400" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default StatusItem;