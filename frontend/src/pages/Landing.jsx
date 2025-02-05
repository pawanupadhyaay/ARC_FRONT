import { Link } from "react-router-dom";
import logo from "../assets/main_logo.png"; // Add the actual logo

const Landing = () => {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="SquadHunt Logo" className="w-32 mb-4" />
          <h1 className="text-3xl font-bold text-center">
            Gaming is a Passion & eSports is a Career
          </h1>
        </div>
  
        {/* Buttons Section */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
          <Link to="/signup" className="bg-primary py-3 text-center rounded-lg text-lg font-semibold transition-all hover:bg-purple-700">
            Sign Up
          </Link>
          <Link to="/login" className="bg-gray-700 py-3 text-center rounded-lg text-lg font-semibold transition-all hover:bg-gray-600">
            Log In
          </Link>
          <button className="bg-white text-black py-3 rounded-lg flex items-center justify-center gap-3 shadow-md transition-all hover:bg-gray-100">
            <img src={"https://image.similarpng.com/file/similarpng/very-thumbnail/2021/09/Logo-Search-Google--on-transparent-background-PNG.png"} alt="Google" className="w-5" />
            Sign Up with Google
          </button>
          <p className="text-sm text-gray-400 cursor-pointer hover:underline">Continue as Guest</p>
        </div>
      </div>
    );
  };
  
  export default Landing;
