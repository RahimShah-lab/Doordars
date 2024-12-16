import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgb(203,209,218)] text-gray-700 py-6">
      <div className="container mx-auto px-4">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
            <a href="/accessibilityStatement" className="hover:underline">Accessibility Statements</a>

            <a href="/cookiePolicy" className="hover:underline">Cookie Policy</a>
            <a href="/disclaimer" className="hover:underline">Disclaimer</a>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B923369262562&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.youtube.com/lutfullahkakakhel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
      </div>
    </footer>
  );
};

export default Footer;
