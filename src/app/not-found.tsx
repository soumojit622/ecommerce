import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHome, FaInfoCircle, FaBookOpen, FaEnvelope } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
      {/* Big 404 */}
      <div className="flex flex-col items-center">
        <h1 className="text-[5rem] sm:text-[8rem] font-extrabold tracking-tight border-4 border-black px-10 py-6 shadow-[6px_6px_0_#000] bg-yellow-300">
          404
        </h1>
        <span className="mt-2 text-lg font-semibold text-gray-700">
          Page not found
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-center">
        Oops! Looks like you’re lost
      </h2>

      {/* Message */}
      <p className="text-gray-600 text-center max-w-xl mt-3 mb-12">
        The page you’re looking for doesn’t seem to exist. Try exploring one of
        these sections instead.
      </p>

      {/* Related Links */}
      <div className="grid sm:grid-cols-2 gap-5 mb-12 max-w-lg w-full">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 border-2 border-black p-4 bg-yellow-200 shadow-[4px_4px_0_#000] rounded-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-semibold"
        >
          <FaHome className="w-5 h-5" /> Home
        </Link>
        <Link
          href="/about"
          className="flex items-center justify-center gap-2 border-2 border-black p-4 bg-pink-200 shadow-[4px_4px_0_#000] rounded-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-semibold"
        >
          <FaInfoCircle className="w-5 h-5" /> About Us
        </Link>
        <Link
          href="/blog"
          className="flex items-center justify-center gap-2 border-2 border-black p-4 bg-green-200 shadow-[4px_4px_0_#000] rounded-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-semibold"
        >
          <FaBookOpen className="w-5 h-5" /> Blog
        </Link>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 border-2 border-black p-4 bg-blue-200 shadow-[4px_4px_0_#000] rounded-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-semibold"
        >
          <FaEnvelope className="w-5 h-5" /> Contact
        </Link>
      </div>

      {/* Main CTA */}
      <Button
        asChild
        className="bg-white text-black border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all font-bold hover:text-white"
      >
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
