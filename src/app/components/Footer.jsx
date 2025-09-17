"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";

export default function Footer({ setActiveSection }) {
  return (
    <div>
      {/* Newsletter Section */}
<div className="relative bg-gray-200 py-24 px-6 overflow-hidden">
  {/* Left Image */}
  <div className="absolute inset-y-0 left-0 -translate-x-1/2 w-1/2">
    <Image
      src="https://i.ibb.co.com/5ghR8n45/newsletter-left.jpg"
      alt="Newsletter Left"
      fill
      className="object-cover shadow-md"
      sizes="(max-width: 768px) 50vw, 25vw"
      priority
    />
  </div>

  {/* Right Image */}
  <div className="absolute inset-y-0 right-0 translate-x-1/2 w-1/2">
    <Image
      src="https://i.ibb.co.com/5WqYjHhd/newsletter-right.jpg"
      alt="Newsletter Right"
      fill
      className="object-cover shadow-md"
      sizes="(max-width: 768px) 50vw, 25vw"
      priority
    />
  </div>

  {/* Center Newsletter */}
  <div className="relative z-10 text-center text-sm sm:text-base max-w-md mx-auto px-15 sm:px-15">
    <h2 className="text-3xl sm:text-3xl font-bold text-black mb-2">
      Join Our Newsletter
    </h2>
    <p className="text-gray-700 mb-6 sm:text-lg">
      Sign up for deals, new products and promotions
    </p>

    {/* Responsive input + button */}
    <div className="flex flex-col sm:flex-row items-center justify-center bg-white shadow-md rounded-lg overflow-hidden w-full sm:max-w-lg mx-auto">
      {/* Icon */}
      <div className="flex items-center px-3 text-gray-500">
        <Mail className="w-5 h-5" />
      </div>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email address"
        className="flex-1 px-3 py-2 outline-none w-full sm:w-auto"
      />

      {/* Sign Up Button */}
      <button className="bg-gray-600 text-white px-6 py-2 font-semibold hover:bg-black mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto">
        Sign Up
      </button>
    </div>
  </div>
</div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-300">
        {/* Top Section */}
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Logo */}
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            Roomify{" "}
            <span className="text-sm font-normal">
              | Gift & Decoration Store
            </span>
          </div>

          {/* Menu */}
          <nav className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <button
              onClick={() => setActiveSection("home")}
              className="hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection("shop")}
              className="hover:text-white"
            >
              Shop
            </button>
            <button
              onClick={() => setActiveSection("product")}
              className="hover:text-white"
            >
              Product
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className="hover:text-white"
            >
              Blog
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className="hover:text-white"
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
          {/* Left - Copyright + Policy */}
          <div className="text-gray-400 mb-2 md:mb-0">
            Copyright © 2025{" "}
            <span className="text-white font-semibold">Roomify</span>. All
            rights reserved.
            <button
              onClick={() => setActiveSection("privacy")}
              className="font-bold hover:underline ml-2"
            >
              Privacy Policy
            </button>{" "}
            |{" "}
            <button
              onClick={() => setActiveSection("terms")}
              className="font-bold hover:underline ml-2"
            >
              Terms of Use
            </button>
          </div>

          {/* Right - Social Icons */}
          <div className="flex space-x-4 mt-2 md:mt-0 justify-center md:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-white"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-white"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="hover:text-white"
            >
              <SiYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
