import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ConfirmCodePage = () => {
  const navigate = useNavigate();
  const [confirmationCode, setConfirmationCode] = useState("");
  const userEmail = "aditya@arc.com"; // Replace with dynamic email data if needed

  const handleConfirm = () => {
    console.log("Entered Code:", confirmationCode);
    navigate("/signup-selection")
    // Add code verification logic here
  };

  const handleResendCode = () => {
    console.log("Resending confirmation code...");
    // Add logic to resend code
  };

  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center text-white p-6 space-y-8">
      {/* Navigation Back */}
      <div
        className="absolute top-6 left-6 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <span className="text-lg">←</span>
      </div>

      {/* Title & Progress */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center space-y-4"
      >
        <h1 className="text-2xl font-bold text-white">Sign Up</h1>

        {/* Progress Indicator */}
        <div className="flex space-x-6">
          <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
          <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
        </div>
      </motion.div>

      {/* Confirmation Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-center space-y-3"
      >
        <p className="text-gray-300">
          A confirmation code was sent to <br />
          <span className="font-semibold text-white">{userEmail}</span>.
        </p>

        <p className="text-gray-400">Check your email and enter the code below.</p>
      </motion.div>

      {/* Confirmation Code Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-full max-w-xs space-y-6"
      >
        <input
          type="text"
          placeholder="Confirmation Code"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
          className="w-full p-3 rounded-lg bg-black bg-opacity-30 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300 text-center"
        />

        {/* Resend Code */}
        <p className="text-sm text-gray-400 text-center">
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
          className="bg-purple-600 w-full py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all"
          onClick={handleConfirm}
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ConfirmCodePage;
