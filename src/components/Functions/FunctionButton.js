import React from "react";
import { motion } from "framer-motion";

const FunctionButton = ({ label, action, position, disableHover = false }) => {
  // Posiciones para un diseño de cruceta estilo joystick con mejor separación
  const positionClasses = {
    up: "absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-full",
    down: "absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-full",
    left: "absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-full",
    right: "absolute right-1/4 top-1/2 transform -translate-y-1/2 translate-x-full",
    center: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <motion.button
      className={`w-16 h-16 bg-[#0f172a] text-[#60a5fa] font-bold rounded-lg shadow-md border border-[#42a5f5] flex items-center justify-center ${positionClasses[position]}`}
      onClick={action}
      whileHover={disableHover ? undefined : { scale: 1.1 }}
      whileTap={disableHover ? undefined : { scale: 0.9 }}
    >
      {label}
    </motion.button>
  );
};

export default FunctionButton;
