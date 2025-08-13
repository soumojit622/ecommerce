import Footer from "@/modules/home/ui/components/Footer";
import { Navbar } from "@/modules/home/ui/components/Navbar";
import React, { Suspense } from "react";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 bg-[#f4f4f0]">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
