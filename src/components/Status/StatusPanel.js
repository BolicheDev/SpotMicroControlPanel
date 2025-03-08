import React from "react";
import StatusItem from "./StatusItem";
import { motion } from "framer-motion";

const StatusPanel = () => {
  return (
    <motion.div
      className="w-full h-full bg-[#1e293b] rounded-xl shadow-lg border border-[#42a5f5] p-6 flex flex-col gap-4 text-[#42a5f5] animate-fade-in"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-center uppercase tracking-wide border-b border-[#42a5f5] pb-2">System Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatusItem label="CPU Usage" value="34%" />
        <StatusItem label="Memory" value="2.5GB / 8GB" />
        <StatusItem label="Temperature" value="45°C" />
        <StatusItem label="Network" value="Connected" />
      </div>
    </motion.div>
  );
};

export default StatusPanel;