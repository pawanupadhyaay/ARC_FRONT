import { Link } from "react-router-dom";
import logo from "../assets/Home-5.png"; // Replace with your actual logo

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
          <Link to="/quests" className="hover:text-gray-400">Quests</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
