import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center border-t font-medium p-4 gap-4">
      {/* Left: Brand */}
      <div className="text-lg">SilkRoute, Inc.</div>

      {/* Middle: Copyright */}
      <div className="text-sm text-gray-500">
        Made with <span className="text-red-500">❤️</span> by Soumojit Banerjee
        • © {new Date().getFullYear()} All rights reserved.
      </div>

      {/* Right: Social Icons */}
      <div className="flex gap-2 text-gray-600">
        <Link
          href="https://facebook.com"
          className="p-2 border rounded-full hover:bg-gray-100 transition"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://twitter.com"
          className="p-2 border rounded-full hover:bg-gray-100 transition"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://linkedin.com"
          className="p-2 border rounded-full hover:bg-gray-100 transition"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://github.com/soumojit622"
          className="p-2 border rounded-full hover:bg-gray-100 transition"
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
