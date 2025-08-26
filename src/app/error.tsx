"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  Home,
  LifeBuoy,
  Search,
  ShoppingBag,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      {/* Illustration */}
      <div className="mb-6">
        <AlertCircle className="w-32 h-32 text-pink-400" />
      </div>

      <h1 className="text-6xl font-bold text-gray-900 mb-3">500</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Something Went Wrong
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! An unexpected error occurred. You can try refreshing the page,
        return to the homepage, or contact support for help.
      </p>

      {/* Search box */}
      <div className="w-full max-w-sm mb-6 relative">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search for products..."
          className="pl-10 border-gray-300"
        />
      </div>

      {/* Buttons with icons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          variant="elevated"
          asChild
          className="bg-pink-400 hover:bg-pink-500 text-black px-6 py-2 rounded-lg flex items-center gap-2"
        >
          <Link href="/">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
        </Button>

        <Button
          variant="elevated"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2"
          onClick={handleRefresh}
        >
          <RefreshCw className="w-4 h-4" /> Refresh Page
        </Button>

        <Button
          variant="elevated"
          asChild
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2"
        >
          <Link href="/support">
            <LifeBuoy className="w-4 h-4" /> Contact Support
          </Link>
        </Button>
      </div>

      {/* Suggested actions */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Quick Links
        </h3>
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <Link
            href="/shop"
            className="flex items-center gap-1 px-3 py-1 bg-pink-100 text-gray-700 rounded-full hover:bg-pink-200"
          >
            <ShoppingBag className="w-4 h-4" /> Browse Products
          </Link>
          <Link
            href="/support"
            className="flex items-center gap-1 px-3 py-1 bg-pink-100 text-gray-700 rounded-full hover:bg-pink-200"
          >
            <LifeBuoy className="w-4 h-4" /> Support
          </Link>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-10 flex items-center gap-1">
        Need more help?
        <Link href="/contact" className="underline hover:text-pink-500">
          Contact Us
        </Link>
      </p>

      {/* Small footer */}
      <p className="text-xs text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Silkroute. All rights reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
