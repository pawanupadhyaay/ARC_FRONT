import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-dark text-white">
      <h2 className="text-xl font-bold">Sign Up</h2>
      
      <div className="mt-6 w-full max-w-xs">
        <input
          type="email"
          name="email"
          placeholder="Email or Phone Number"
          className="w-full p-3 bg-gray-800 rounded-lg mb-4"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 bg-gray-800 rounded-lg mb-4"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 bg-gray-800 rounded-lg mb-4"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="bg-primary py-3 w-full rounded-lg">Continue</button>
      </div>
    </div>
  );
};

export default SignUp;
