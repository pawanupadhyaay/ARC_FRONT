import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading, then navigate to the next page
    setTimeout(() => {
      navigate("/loading-page"); // Change this to the actual next route
    }, 3000);
  }, [navigate]);

  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center text-white p-6 relative">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-purple-800 opacity-30 blur-3xl rounded-full"></div>
      </div>

      {/* Loading Text */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg font-medium z-10"
      >
        Great choices, Diabolus!
      </motion.h1>

      {/* Circular Loading Animation */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-12 h-12 mt-6 border-[6px] border-t-orange-400 border-l-gray-700 border-r-gray-700 border-b-gray-700 rounded-full z-10"
      ></motion.div>
    </div>
  );
};

export default LoadingScreen;
