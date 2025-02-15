import React, { useState } from "react";

const LogIn = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: "", username: "", password: "" });

  const handleNext = () => setStep(step + 1);

  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center text-white p-6">
      <div className="max-w-xs w-full">
       
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-6">Log In</h2>
            
            <input
              className="block w-full mt-3 p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              placeholder="Email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              className="block w-full mt-3 p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Username"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
              className="block w-full mt-3 p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="password"
              placeholder="Password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            {/* Continue Button */}
            <button 
              className="mt-6 bg-purple-600 w-full py-3 rounded-lg text-lg font-medium hover:bg-purple-700"
              onClick={handleNext}
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Confirmation Code */}
        {step === 2 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-6">Enter Confirmation Code</h2>
            
            <input
              className="block w-full mt-3 p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Confirmation Code"
            />

            {/* Continue Button */}
            <button className="mt-6 bg-purple-600 w-full py-3 rounded-lg text-lg font-medium hover:bg-purple-700">
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogIn;
