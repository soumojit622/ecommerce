"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaStar,
  FaTags,
  FaEnvelope,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import NavbarSidebar from "./NavbarSidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "rounded-full border border-transparent px-4 py-1 text-lg font-medium transition-all duration-200",
        "hover:border-primary hover:bg-primary/10 hover:text-primary",
        isActive && "bg-primary text-white hover:bg-primary/90 hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: (
      <>
        <FaHome className="inline mr-2" /> Home
      </>
    ),
  },
  {
    href: "/about",
    children: (
      <>
        <FaInfoCircle className="inline mr-2" /> About
      </>
    ),
  },
  {
    href: "/features",
    children: (
      <>
        <FaStar className="inline mr-2" /> Feature
      </>
    ),
  },
  {
    href: "/pricing",
    children: (
      <>
        <FaTags className="inline mr-2" /> Pricing
      </>
    ),
  },
  {
    href: "/contact",
    children: (
      <>
        <FaEnvelope className="inline mr-2" /> Contact
      </>
    ),
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //   const trpc = useTRPC();
  //   const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <nav className="h-20 flex items-center justify-between border-b bg-white px-6 shadow-sm">
      <Link href="/" className="flex items-center">
        <span
          className={cn(
            "text-4xl font-bold text-primary tracking-tight",
            poppins.className
          )}
        >
          SilkRoute
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {/* {session.data?.user ? (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
          >
            <Link href="/admin">Dashboard</Link>
          </Button>
        </div>
      ) : (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
          >
            <Link prefetch href="/sign-in">
              Log in
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
          >
            <Link prefetch href="/sign-up">
              Start selling
            </Link>
          </Button>
        </div>
      )} */}
      

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon className="size-8" />
        </Button>
      </div>
    </nav>
  );
};
