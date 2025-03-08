import React from "react";
import { motion } from "framer-motion";

const CircularHUD = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center relative">
      <motion.div 
        className="relative w-24 h-24 border-4 border-cyan-400 rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <div className="absolute w-16 h-16 border-2 border-cyan-300 rounded-full"></div>
        <span className="absolute text-lg font-bold text-cyan-300">{value}%</span>
      </motion.div>
      <span className="text-sm text-cyan-400 mt-2">{label}</span>
    </div>
  );
};

export default CircularHUD;