import React from "react";
import { motion } from "framer-motion";

const MonitoringItem = ({ label, value }) => (
  <motion.div
    className="flex justify-between items-center bg-[#0f172a] p-4 rounded-lg shadow-md border border-[#42a5f5] transition-transform transform hover:scale-105 hover:shadow-lg"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <span className="text-sm font-medium tracking-wide text-gray-300">{label}</span>
    <span className="text-lg font-semibold text-[#60a5fa] animate-pulse">{value}</span>
  </motion.div>
);

export default MonitoringItem;