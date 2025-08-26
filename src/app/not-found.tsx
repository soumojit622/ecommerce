import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Book,
  FileText,
  GraduationCap,
  Home,
  Palette,
  Search,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      {/* Illustration */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-32 h-32 text-pink-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="32" cy="32" r="30" />
          <line x1="20" y1="24" x2="28" y2="32" />
          <line x1="28" y1="24" x2="20" y2="32" />
          <line x1="36" y1="24" x2="44" y2="32" />
          <line x1="44" y1="24" x2="36" y2="32" />
          <path d="M16 44h32" />
        </svg>
      </div>

      <h1 className="text-6xl font-bold text-gray-900 mb-3">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved. Don’t
        worry — you can search for what you need, head back home, or explore our
        latest collections.
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
          asChild
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center gap-2"
        >
          <Link href="/shop">
            <ShoppingBag className="w-4 h-4" /> Browse Products
          </Link>
        </Button>
      </div>

      {/* Suggested categories with icons */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Popular Categories
        </h3>
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <Link
            href="/category/digital-art"
            className="flex items-center gap-1 px-3 py-1 bg-pink-100 text-gray-700 rounded-full hover:bg-pink-200"
          >
            <Palette className="w-4 h-4" /> Digital Art
          </Link>
          <Link
            href="/category/courses"
            className="flex items-center gap-1 px-3 py-1 bg-pink-100 text-gray-700 rounded-full hover:bg-pink-200"
          >
            <GraduationCap className="w-4 h-4" /> Online Courses
          </Link>
          <Link
            href="/category/templates"
            className="flex items-center gap-1 px-3 py-1 bg-pink-100 text-gray-700 rounded-full hover:bg-pink-200"
          >
            <FileText className="w-4 h-4" /> Templates
          </Link>
          <Link
            href="/category/books"
            className="flex items-center gap-1 px-3 py-1 bg-pink-100 text-gray-700 rounded-full hover:bg-pink-200"
          >
            <Book className="w-4 h-4" /> E-Books
          </Link>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-10 flex items-center gap-1">
        Need help?
        <Link href="/support" className="underline hover:text-pink-500">
          Contact Support
        </Link>
      </p>

      {/* Small footer */}
      <p className="text-xs text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Silkroute. All rights reserved.
      </p>
    </div>
  );
};

export default NotFoundPage;
