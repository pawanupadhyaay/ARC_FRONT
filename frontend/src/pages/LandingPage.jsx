import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SquadHuntLogo from "../assets/ARC_MAIN_LOGO.png";
import GoogleIcon from "../assets/logos_google-icon.svg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after logo animation completes
    setTimeout(() => setShowContent(true), 2000);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center text-white p-6">
      
      {/* Animated Logo Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img src={SquadHuntLogo} alt="SquadHunt Logo" className="w-40 " />
      </motion.div>

      {/* Main Content - Appears After Logo Animation */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col items-center w-full max-w-xs"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl font-bold text-orange-400 text-center"
            >
              Gaming is a Passion & eSports is a Career
            </motion.h1>

            {/* Buttons */}
            <div className="mt-8 flex flex-col w-full space-y-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="bg-purple-600 w-full py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="border border-white w-full py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-all"
                onClick={() => navigate("/login")}
              >
                Log In
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex items-center justify-center bg-white text-black w-full py-3 rounded-lg text-lg font-medium hover:opacity-90 transition-all"
              >
                <img src={GoogleIcon} alt="Google" className="w-6 mr-2" />
                Sign Up with Google
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-sm underline text-gray-300 hover:text-white transition-all"
              >
                Continue as Guest
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
