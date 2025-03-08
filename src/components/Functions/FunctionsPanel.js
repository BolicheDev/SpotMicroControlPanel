import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FunctionButton from "./FunctionButton";

const FunctionsPanel = () => {
  const connectWebSocket = () => {
    const ws = new WebSocket("ws://localhost:5000");
  
    ws.onopen = () => console.log("Connected to WebSocket");
    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setTimeout(connectWebSocket, 3000); // Reintentar conexión en 3 segundos
    };
  
    return ws;
  };
  
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    setSocket(connectWebSocket());
  }, []);

  const sendCommand = (command) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ command }));
      console.log("Sent command:", command);
    } else {
      console.error("WebSocket not connected");
    }
  };

  return (
    <motion.div
      className="w-full h-full bg-[#1e293b] rounded-xl shadow-lg border border-[#42a5f5] p-6 flex gap-6 text-[#42a5f5] animate-fade-in"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Sección izquierda: Joystick */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <h2 className="text-2xl font-bold text-center uppercase tracking-wide border-b border-[#42a5f5] pb-2 mb-6">Movement</h2>
        <div className="relative w-40 h-40 flex items-center justify-center mt-4">
          <FunctionButton label="▲" action={() => sendCommand("up")} position="up" disableHover />
          <FunctionButton label="▼" action={() => sendCommand("down")} position="down" disableHover />
          <FunctionButton label="◀" action={() => sendCommand("left")} position="left" disableHover />
          <FunctionButton label="▶" action={() => sendCommand("right")} position="right" disableHover />
          <FunctionButton label="Idle" action={() => sendCommand("idle")} position="center" disableHover />
        </div>
      </div>
      
      {/* Sección derecha: Lista de botones en dos columnas */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold text-center uppercase tracking-wide border-b border-[#42a5f5] pb-2">Controls</h2>
        <div className="grid grid-cols-2 gap-4">
          <FunctionButton label="Start" action={() => sendCommand("start")} />
          <FunctionButton label="Stop" action={() => sendCommand("stop")} />
          <FunctionButton label="Reset" action={() => sendCommand("reset")} />
          <FunctionButton label="Mode 1" action={() => sendCommand("mode1")} />
          <FunctionButton label="Mode 2" action={() => sendCommand("mode2")} />
          <FunctionButton label="Shutdown" action={() => sendCommand("shutdown")} />
        </div>
      </div>
    </motion.div>
  );
};

export default FunctionsPanel;