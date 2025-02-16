import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 1,
      title: "Gamer/e-athlete/CC",
      image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180", // Replace with actual image
    },
    {
      id: 2,
      title: "Tournament Organizer",
      image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180", // Replace with actual image
    },
    {
      id: 3,
      title: "eSports Team/Org",
      image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180", // Replace with actual image
    },
  ];
  const handleConfirm = () => {
    navigate("/game-selection")
    // Add code verification logic here
  };
  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center text-white p-6">
      {/* Navigation Back */}
      <div className="absolute top-6 left-6 cursor-pointer" onClick={() => navigate(-1)}>
        <span className="text-xl">←</span>
      </div>

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-2xl font-bold mt-10"
      >
        Sign Up
      </motion.h1>

      {/* Progress Indicator */}
      <div className="flex space-x-4 mt-4">
        <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
      </div>

      {/* Question Text */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 1 }} 
        className="mt-8 text-lg text-gray-300"
      >
        Who are you?
      </motion.p>

      {/* Selection Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {roles.map((role) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`relative flex flex-col items-center cursor-pointer rounded-lg p-3 w-36 h-24 bg-black bg-opacity-30 border 
            ${selectedRole === role.id ? "border-purple-500" : "border-transparent"} hover:border-purple-400`}
            onClick={() => setSelectedRole(role.id)}
          >
            <img src={role.image} alt={role.title} className="w-full h-16 rounded-lg object-cover" />
            <p className="text-xs text-gray-300 mt-2 text-center">{role.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Continue Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="bg-purple-600 w-40 py-3 mt-10 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all"
        disabled={!selectedRole} // Disable button if no selection
        onClick={handleConfirm}
      >
        Continue
      </motion.button>

      {/* Skip This Step */}
      <p className="mt-4 text-sm text-gray-400 cursor-pointer hover:underline" onClick={() => console.log("Skipped Step")}>
        Skip This Step
      </p>
    </div>
  );
};

export default SignUpSelection;
