import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      <a href="#" className="text-blue-500 text-2xl"><FaTwitter /></a>
      <a href="#" className="text-pink-600 text-2xl"><FaInstagram /></a>
      <a href="#" className="text-blue-700 text-2xl"><FaFacebook /></a>
      <a href="#" className="text-black text-2xl"><FaTiktok /></a>
    </div>
  );
};

export default SocialIcons;
