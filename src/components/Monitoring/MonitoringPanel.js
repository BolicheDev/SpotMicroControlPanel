import React from "react";
import CircularHUD from "./CircularHUD";

const MonitoringPanel = () => {
  return (
    <div className="border border-cyan-400 p-4 rounded-lg bg-gray-800 shadow-md flex flex-col items-center justify-center h-80">
      <h2 className="text-xl font-bold text-cyan-400 text-center mb-4">MONITORING</h2>
      <div className="w-full h-full flex items-center justify-center border border-cyan-300 rounded-lg">
        <div className="grid grid-cols-3 gap-6">
          <CircularHUD label="Sensor 1" value={75} />
          <CircularHUD label="Sensor 2" value={60} />
          <CircularHUD label="Sensor 3" value={90} />
        </div>
      </div>
    </div>
  );
};

export default MonitoringPanel;