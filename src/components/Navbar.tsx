import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="https://iesiedc.github.io/iesceiedc/logo1.png" style={{ width: '100px', height: 'auto' }} />

              {/* <span className="text-2xl font-bold text-black-100">IESCE IEDC</span> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600">Events</Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600">News</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600">Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/admin/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Admin Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/events" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Events</Link>
            <Link to="/news" className="block px-3 py-2 text-gray-700 hover:text-blue-600">News</Link>
            <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</Link>
            <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Team</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact Us</Link>
            <Link to="/admin/login" className="block px-3 py-2 text-blue-600 hover:text-blue-700">Admin Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
