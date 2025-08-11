import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "SilkRoute | Multi-Vendor Ecommerce Platform for Scalable Online Stores",
  description:
    "SilkRoute is a modern, secure, and scalable multi-vendor ecommerce platform. Create and manage online stores with vendor dashboards, secure payments, product management, SEO-friendly design, and global reach.",
  keywords: [
    "multi-vendor ecommerce",
    "online store builder",
    "ecommerce marketplace",
    "vendor management system",
    "secure online payments",
    "B2B ecommerce",
    "multi-tenant ecommerce platform",
    "ecommerce website creation",
    "online marketplace software",
    "scalable ecommerce solutions",
  ],
  authors: [
    {
      name: "Soumojit Banerjee",
      url: "https://github.com/soumojit622",
    },
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Toaster richColors />
      </body>
    </html>
  );
}
