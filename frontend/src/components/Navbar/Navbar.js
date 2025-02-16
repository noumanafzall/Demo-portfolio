import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => { // ✅ Make sure "Navbar" starts with an uppercase letter
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">MyPortfolio</Link>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-300">Projects</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300">Contact US</Link></li>
        </ul>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link to="/" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
