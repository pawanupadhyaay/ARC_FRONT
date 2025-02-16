import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen bg-gradient-to-b from-black to-purple-900 flex flex-col items-center justify-center text-white p-6">
      {/* Navigation Back */}
      <div
        className="absolute top-6 left-6 cursor-pointer"
        onClick={() => navigate(-1)}
      >
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
        <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
        <div className="w-8 h-1 bg-gray-500 rounded-full"></div>
      </div>

      <div className="text-left w-full pl-8">
        <p className="mt-6 text-gray-300">Get Started</p>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="w-full max-w-xs mt-4 space-y-4"
      >
        {/* Input Fields */}
        {[
          { name: "email", placeholder: "Email or Phone Number *" },
          { name: "displayName", placeholder: "Display Name *" },
          { name: "username", placeholder: "Username *" },
          { name: "password", placeholder: "Password *", type: "password" },
          {
            name: "confirmPassword",
            placeholder: "Confirm Password *",
            type: "password",
          },
        ].map((field, index) => (
          <div
            key={index}
            className="relative w-full  rounded-b-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-gradient-to-r after:from-pink-500 after:via-purple-500 after:to-indigo-500 after:rounded-bl-xl after:rounded-br-"
          >
            <input
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-300 bg-[#1a1a2e]  outline-none border-none focus:ring-0 rounded-tl-xl rounded-tr-xl"
            />
          </div>
        ))}

        {/* Password Requirements */}
        <div className="text-sm text-gray-400">
          <p>
            🔸 Must contain at least 8 characters, 1 special symbol (@, #, %,
            !), and 1 number.
          </p>
          <p>🔸 May not include your name or birth date.</p>
        </div>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="bg-purple-600 w-full py-3 mt-4 rounded-lg text-lg font-medium hover:bg-purple-700 transition-all"
          onClick={() => navigate("/email-conformation")}
        >
          Continue
        </motion.button>

        {/* Terms & Conditions */}
        <p className="text-xs text-gray-400 text-center mt-2">
          By clicking continue, you agree to our{" "}
          <span className="text-orange-400 cursor-pointer hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-orange-400 cursor-pointer hover:underline">
            Privacy Policy
          </span>
          .
        </p>

        {/* Log In Link */}
        <p className="mt-4 text-sm text-gray-300 text-center">
          Already have an account?{" "}
          <span
            className="text-orange-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
