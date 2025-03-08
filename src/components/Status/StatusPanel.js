import React from "react";
import StatusItem from "./StatusItem";

const StatusPanel = () => {
  return (
    <div className="border border-cyan-400 p-4 rounded-lg bg-gray-800 shadow-md">
      <h2 className="text-xl font-bold text-cyan-400 text-center mb-4">STATUS</h2>
      <div className="space-y-4">
        <StatusItem label="CPU Usage" value={65} />
        <StatusItem label="Battery" value={80} />
        <StatusItem label="WiFi Signal" value={90} />
      </div>
    </div>
  );
};

export default StatusPanel;