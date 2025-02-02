import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>iedc@iesce.info</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 9656220545</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Ies college of engineering, H48X+3P3, Poovathur Parappoor Road, Thrissur District, Chitilappilly, Kerala 680551</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              

<li><Link to="/events" className="hover:text-blue-400">Events</Link></li>
<li><Link to="/news" className="hover:text-blue-400">News</Link></li>
<li><Link to="/gallery" className="hover:text-blue-400">Gallery</Link></li>
<li><Link to="/team" className="hover:text-blue-400">Team</Link></li>
<li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/iescethrissur/" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/ies-iedc-iic/posts/?feedView=all" className="hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/iesce_iedc/" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} IEDC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
