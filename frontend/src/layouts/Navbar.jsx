// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../assets/logo.png"; // Add logo image

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-10" />
//         </Link>
//         <div className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-gray-400">Home</Link>
//           <Link to="/profile" className="hover:text-gray-400">Profile</Link>
//           <Link to="/quests" className="hover:text-gray-400">Quests</Link>
//         </div>
//         <button className="bg-blue-500 px-4 py-2 rounded md:block hidden">
//           Sign In
//         </button>
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>
      
//       {menuOpen && (
//         <div className="md:hidden flex flex-col space-y-4 p-4">
//           <Link to="/" className="hover:text-gray-400">Home</Link>
//           <Link to="/profile" className="hover:text-gray-400">Profile</Link>
//           <Link to="/quests" className="hover:text-gray-400">Quests</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
