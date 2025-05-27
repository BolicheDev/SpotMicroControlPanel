import React, { useContext } from 'react';
import { WebSocketContext } from '../../WebSocketContext';
import { motion } from "framer-motion";
import MonitoringItem from "./MonitoringItem";

const MonitoringPanel = () => {
  const { wsConnected } = useContext(WebSocketContext);

  return (
    <motion.div
      className="w-full h-full bg-[#1e293b] rounded-xl shadow-lg border border-[#42a5f5] p-6 flex flex-col gap-6 text-[#42a5f5] animate-fade-in"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-center uppercase tracking-wide border-b border-[#42a5f5] pb-2">Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MonitoringItem label="Battery Level" value="78%" />
        <MonitoringItem label="Sensor Status" value="Active" />
        <MonitoringItem label="Position" value="X: 10, Y: 20, Z: 5" />
        <MonitoringItem label="System Health" value="Optimal" />
        <MonitoringItem label="WebSocket Status" value={wsConnected ? "Connected" : "Disconnected"} />
      </div>
    </motion.div>
  );
};

export default MonitoringPanel;
