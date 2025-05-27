import React, { createContext, useState, useEffect, useCallback } from 'react';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [wsConnected, setWsConnected] = useState(false);

  const connectWebSocket = useCallback(() => {
    const ws = new WebSocket('ws://192.168.1.143:5000');

    ws.onopen = () => {
      console.log('Connected to WebSocket');
      setWsConnected(true);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket');
      setWsConnected(false);
      setTimeout(connectWebSocket, 3000);
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
      ws.close();
    };

    setSocket(ws);
  }, []);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (socket) socket.close();
    };
  }, [connectWebSocket]);

  const sendCommand = (command) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ command }));
      console.log('Sent command:', command);
    } else {
      console.error('WebSocket not connected');
    }
  };

  return (
    <WebSocketContext.Provider value={{ wsConnected, sendCommand }}>
      {children}
    </WebSocketContext.Provider>
  );
};
