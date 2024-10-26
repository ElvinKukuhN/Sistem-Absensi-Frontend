"use client";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";

interface AlertNotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void; // Callback function to close notification
}

const AlertNotification: React.FC<AlertNotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Call the onClose function after 3 seconds
    }, 3500); // Change duration as needed
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-down-up">
      <div className={`shadow-lg overflow-hidden ${type === "error" ? "bg-red-400" : "bg-green-400"} text-white transition-transform transform hover:scale-105 duration-300 rounded-sm`}>
        <div className="p-4 flex items-center justify-between space-x-2">
          <span className="font-semibold">{message}</span>
          <button onClick={onClose} className="text-white hover:text-opacity-70 focus:outline-none">
            &times; {/* Icon for close button */}
          </button>
        </div>
        <div className={`relative w-full h-1 ${type === "error" ? "bg-red-300" : "bg-green-300"}`}>
          <div className={`h-full ${type === "error" ? "bg-red-600" : "bg-green-600"}`} style={{ animation: "progress 3s linear forwards" }}></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-slide-down-up {
          animation: slideIn 0.5s ease-out, slideOut 0.5s 3s ease-in;
        }
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-20px);
            opacity: 0;
          }
        }
      `}</style>
      </div>
  );
};

export default AlertNotification;
