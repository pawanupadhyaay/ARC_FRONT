import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const GameSelection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGames, setSelectedGames] = useState([]);

  const games = [
    { id: 1, name: "BGMI / PUBG", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
    { id: 2, name: "Call of Duty Mobile", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
    { id: 3, name: "Free Fire", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
    { id: 4, name: "PUBG New State", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
    { id: 5, name: "Clash Royale", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
    { id: 6, name: "Clash of Clans", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
    { id: 7, name: "Pokemon Unite", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
    { id: 8, name: "Valorant", image: "https://tse4.mm.bing.net/th?id=OIP.5NMegaCCOfM2AAAnz3s3zAHaEK&pid=Api&P=0&h=180" },
  ];

  const toggleGameSelection = (id) => {
    setSelectedGames((prev) =>
      prev.includes(id) ? prev.filter((gameId) => gameId !== id) : [...prev, id]
    );
  };
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
        Which games do you play?
      </motion.p>

      {/* Search Bar */}
      <div className="relative mt-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Search games"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg bg-black bg-opacity-30 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300 pl-12"
        />
        <FaSearch className="absolute left-4 top-4 text-gray-400" />
      </div>

      {/* Game Selection Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
        {games
          .filter((game) => game.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`relative flex flex-col items-center cursor-pointer rounded-lg p-3 h-24 bg-black bg-opacity-30 border 
              ${
                selectedGames.includes(game.id) ? "border-purple-500" : "border-transparent"
              } hover:border-purple-400`}
              onClick={() => toggleGameSelection(game.id)}
            >
              <img src={game.image} alt={game.name} className="w-full h-16 rounded-lg object-cover" />
              <p className="text-xs text-gray-300 mt-2 text-center">{game.name}</p>
            </motion.div>
          ))}
      </div>

      {/* Continue Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="bg-purple-600 w-40 py-3 mt-10 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all"
        disabled={selectedGames.length === 0} // Disable button if no game is selected
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

export default GameSelection;
