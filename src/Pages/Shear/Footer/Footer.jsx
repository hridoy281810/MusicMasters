import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/logo/logoweb2.png'

const Footer = () => {
    return (
        <div>
            <div>
            <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto overflow-x-hidden ">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Music Masters Logo" className="w-16 md:w-32" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3">About Us</h4>
            <p>Music Masters is a premier music school dedicated to providing high-quality music education and training.</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3">Our Programs</h4>
            <ul>
              <li>Instrumental Lessons</li>
              <li>Vocal Training</li>
              <li>Music Theory</li>
              <li>Ensemble Classes</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3">Contact Us</h4>
            <p>123 Music Street, City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@musicmasters.com</p>
            <div className="flex justify-center md:justify-start mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-2">
        <div className="container mx-auto">
          <p className="text-center text-sm">&copy; 2023 Music Masters. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
            </div>
        </div>
    );
};

export default Footer;