import React from "react";
import { WebSocketProvider } from '../WebSocketContext';
import StatusPanel from "./Status/StatusPanel";
import MonitoringPanel from "./Monitoring/MonitoringPanel";
import FunctionsPanel from "./Functions/FunctionsPanel";

const FuturisticHUD = () => {
  return (
    <WebSocketProvider>
      <div className="w-full h-screen bg-[#0f172a] p-6 grid grid-rows-2 gap-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-4 h-1/2 min-h-[40vh] max-h-[50vh]">
          <StatusPanel />
          <MonitoringPanel />
        </div>
        <div className="h-1/2 min-h-[40vh] max-h-[50vh] flex items-center justify-center overflow-hidden">
          <FunctionsPanel />
        </div>
      </div>
    </WebSocketProvider>
  );
};

export default FuturisticHUD;
