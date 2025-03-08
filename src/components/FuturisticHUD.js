import React from "react";
import MonitoringPanel from "../components/Monitoring/MonitoringPanel";
import FunctionsPanel from "../components/Functions/FunctionsPanel";
import StatusPanel from "../components/Status/StatusPanel";

const FuturisticHUD = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-[#42a5f5] p-4 bg-[#0a0f1c]">
      <HUDContainer>
        <HUDRow height="20%">
          <HUDColumn size="w-1/3"><StatusPanel /></HUDColumn>
          <HUDColumn size="w-2/3"><FunctionsPanel /></HUDColumn>
        </HUDRow>
        <HUDRow height="80%">
          <HUDColumn size="w-full"><MonitoringPanel /></HUDColumn>
        </HUDRow>
      </HUDContainer>
    </div>
  );
};

const HUDContainer = ({ children }) => (
  <div className="w-full max-w-6xl border-4 border-[#42a5f5] rounded-lg bg-[#121826] shadow-lg p-4 h-[95vh] relative">
    <div className="absolute top-0 left-0 w-full h-full border border-[#42a5f5] rounded-lg opacity-50"></div>
    {children}
  </div>
);

const HUDRow = ({ height, children }) => (
  <div className="flex mb-4" style={{ height }}>{children}</div>
);

const HUDColumn = ({ size, children }) => (
  <div className={`${size} flex items-center justify-center p-2`}>{children}</div>
);

export default FuturisticHUD;
