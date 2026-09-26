import Providers from "@/components/Providers";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Canvas Draw",
  description: `
  Professional canvas drawing tool with powerful features. 
  Create stunning designs with shapes, lines, freehand drawing, and more.`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0b0914] relative`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
