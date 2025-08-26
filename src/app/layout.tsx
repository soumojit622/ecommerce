import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silkroute | Scalable Multi-Tenant E-Commerce Solution",
  description:
    "Silkroute empowers businesses to launch and manage multiple online stores seamlessly with a secure, scalable, and customizable e-commerce platform.",
  keywords: [
    "Silkroute",
    "multi-tenant",
    "e-commerce",
    "online store platform",
    "scalable ecommerce",
    "SaaS ecommerce",
    "next.js ecommerce",
  ],
  authors: [
    { name: "Soumojit Banerjee", url: "https://github.com/soumojit622" },
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
