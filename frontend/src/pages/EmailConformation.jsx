import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ConfirmCodePage = () => {
  const navigate = useNavigate();
  const [confirmationCode, setConfirmationCode] = useState("");
  const userEmail = "aditya@arc.com"; // Replace with dynamic email data if needed

  const handleConfirm = () => {
    console.log("Entered Code:", confirmationCode);
    // Add code verification logic here
  };

  const handleResendCode = () => {
    console.log("Resending confirmation code...");
    // Add logic to resend code
  };

  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center text-white p-6">
      
      {/* Navigation Back */}
      <div className="absolute top-6 left-6 cursor-pointer" onClick={() => navigate(-1)}>
        <span className="text-lg">←</span>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold text-white"
      >
        Sign Up
      </motion.h1>

      {/* Progress Indicator */}
      <div className="flex space-x-2 mt-2">
        <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
      </div>

      {/* Confirmation Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-8 text-gray-300 text-center"
      >
        A confirmation code was sent to <br />
        <span className="font-semibold text-white">{userEmail}</span>.
      </motion.p>

      <p className="mt-2 text-gray-400">Check your email and enter the code below.</p>

      {/* Confirmation Code Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-full max-w-xs mt-6"
      >
        <input
          type="text"
          placeholder="Confirmation Code"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
          className="w-full p-3 rounded-lg bg-black bg-opacity-30 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300 text-center"
        />

        {/* Resend Code */}
        <p className="mt-2 text-sm text-gray-400 text-center">
          Didn’t receive a code?{" "}
          <span
            className="text-orange-400 cursor-pointer hover:underline"
            onClick={handleResendCode}
          >
            Send again.
          </span>
        </p>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="bg-purple-600 w-full py-3 mt-6 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all"
          onClick={handleConfirm}
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ConfirmCodePage;
