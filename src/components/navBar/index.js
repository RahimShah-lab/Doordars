import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [stemDropdown, setStemDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e2e6f0] text-gray-700 shadow-md z-50 relative">
      <div className="container mx-auto flex items-center justify-between py-1 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <a href="/" className="hover:opacity-80 transition-opacity duration-200">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/images/logo.avif`} 
              alt="Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-3xl focus:outline-none p-2"
        >
          {isMobileMenuOpen ? <FaTimes className="text-gray-700" /> : <FaBars className="text-gray-700" />}
        </button>

        {/* Navbar Links (Desktop Version) */}
        <div className={`hidden lg:flex items-center space-x-6`}>
          <a href="/" className="hover:text-black transition-all duration-300">Home</a>
          <a href="/blog" className="hover:text-black transition-all duration-300">Blog</a>
          <a href="/gallery" className="hover:text-black transition-all duration-300">Gallery</a>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            <button className="hover:text-black transition-all duration-300">Products</button>
            <div
              className={`absolute top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg transform transition-transform duration-300 ${
                productsDropdown ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <a href="/products/e-book" className="block px-4 py-2 hover:bg-gray-200">E-Book</a>
              <a href="/products/e-kite" className="block px-4 py-2 hover:bg-gray-200">E-Kite</a>
              <a href="/products/e-stories" className="block px-4 py-2 hover:bg-gray-200">E-Stories</a>
            </div>
          </div>

          {/* STEM Activities Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setStemDropdown(true)}
            onMouseLeave={() => setStemDropdown(false)}
          >
            <button className="hover:text-black transition-all duration-300">STEM Activities</button>
            <div
              className={`absolute top-full mt-2 w-64 bg-white text-black rounded-md shadow-lg transform transition-transform duration-300 ${
                stemDropdown ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <a href="/stem/ai-lounchpad" className="block px-4 py-2 hover:bg-gray-200">AI Launchpad</a>
              <a href="/stem/iot-project" className="block px-4 py-2 hover:bg-gray-200">IoT Project</a>
              <a href="/stem/coding-robotics" className="block px-4 py-2 hover:bg-gray-200">Coding & Robotics</a>
            </div>
          </div>

          <a href="/about-us" className="hover:text-black transition-all duration-300">About Us</a>
          <a href="/contact-us" className="hover:text-black transition-all duration-300">Contact Us</a>

          {/* Shopping Cart Icon */}
          <div className="text-gray-700 text-xl cursor-pointer hover:text-black">
            <FaShoppingCart />
          </div>
        </div>

        {/* Mobile Menu (Only Visible on Small Screens) */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white text-gray-700 lg:hidden z-50 shadow-md">
            <a href="/" className="block px-6 py-3 border-b hover:bg-gray-100">Home</a>
            <a href="/blog" className="block px-6 py-3 border-b hover:bg-gray-100">Blog</a>
            <a href="/gallery" className="block px-6 py-3 border-b hover:bg-gray-100">Gallery</a>
            <div className="relative border-b">
              <button
                onClick={() => setProductsDropdown(!productsDropdown)}
                className="block w-full text-left px-6 py-3 hover:bg-gray-100"
              >
                Products
              </button>
              {productsDropdown && (
                <div className="bg-gray-50">
                  <a href="/products/e-book" className="block px-6 py-2 hover:bg-gray-200">E-Book</a>
                  <a href="/products/e-kite" className="block px-6 py-2 hover:bg-gray-200">E-Kite</a>
                  <a href="/products/e-stories" className="block px-6 py-2 hover:bg-gray-200">E-Stories</a>
                </div>
              )}
            </div>
            <div className="relative border-b">
              <button
                onClick={() => setStemDropdown(!stemDropdown)}
                className="block w-full text-left px-6 py-3 hover:bg-gray-100"
              >
                STEM Activities
              </button>
              {stemDropdown && (
                <div className="bg-gray-50">
                  <a href="/stem/ai-lounchpad" className="block px-6 py-2 hover:bg-gray-200">AI Launchpad</a>
                  <a href="/stem/iot-project" className="block px-6 py-2 hover:bg-gray-200">IoT Project</a>
                  <a href="/stem/coding-robotics" className="block px-6 py-2 hover:bg-gray-200">Coding & Robotics</a>
                </div>
              )}
            </div>
            <a href="/about-us" className="block px-6 py-3 border-b hover:bg-gray-100">About Us</a>
            <a href="/contact-us" className="block px-6 py-3 hover:bg-gray-100">Contact Us</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
