import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-5 mt-15">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Section */}
        <div className="space-y-2">
          <h1 className="text-white text-2xl font-bold">ZiplyURL</h1>
          <p className="text-gray-400 text-sm">
            Fast, clean & reliable URL shortening.
          </p>

          <div className="flex gap-4 text-lg mt-2">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Shorten</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Phone: +91 98765 43210</li>
            <li>Bhopal, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-2 text-center text-gray-500 text-xs">
        © 2025 ZiplyURL. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
