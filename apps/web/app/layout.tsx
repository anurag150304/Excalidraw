import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ReactNode } from "react";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canvas Draw",
  description: `
  Professional canvas drawing tool with powerful features. 
  Create stunning designs with shapes, lines, freehand drawing, and more.`,
};

export default function RootLayout({ children }: { children: ReactNode; }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
