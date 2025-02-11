import React from "react";
import { useNavigate } from "react-router-dom";
import SquadHuntLogo from "../assets/main_logo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center text-white p-6 relative">
      {/* Logo */}
      <div className="absolute top-10 w-full text-center">
        <img src={SquadHuntLogo} alt="SquadHunt Logo" className="w-32 mx-auto" />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-xs mt-40">
        <h1 className="text-lg font-bold text-orange-400">Gaming is a Passion & eSports is a Career</h1>
        
        {/* Sign Up Button */}
        <button 
          className="mt-6 bg-purple-600 w-full py-3 rounded-lg text-lg font-medium hover:bg-purple-700"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

        {/* Login Button */}
        <button 
          className="mt-3 border border-white w-full py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-black"
        >
          Log In
        </button>

        {/* Sign Up With Google */}
        <p className="mt-4 text-sm text-gray-300">Sign Up With</p>
        <button className="mt-3 bg-white text-black w-full py-3 rounded-lg text-lg font-medium hover:opacity-90">
          Google
        </button>

        {/* Continue as Guest */}
        <button className="mt-6 text-sm underline text-gray-300 hover:text-white">
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
