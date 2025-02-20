import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="https://iesiedc.github.io/iesceiedc/logo1.png"
                style={{ width: '100px', height: 'auto' }}
                alt="Logo"
              />
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
            
            {/* Download App Button */}
            <a
  href="https://drive.google.com/file/d/1tRyZDdAlk-mflbtdoxfZJFJMler9ClXU/view?usp=sharing"
  download
  className="inline-flex items-center px-5 py-2 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
>
  <Download className="h-5 w-5 mr-2" />
  Download App
</a>


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
            
            {/* Download App Button (Mobile) */}
            <a
  href="https://drive.google.com/file/d/1tRyZDdAlk-mflbtdoxfZJFJMler9ClXU/view?usp=sharing"
  download
  className="block w-full text-center px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
>
  📥 Download App
</a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
