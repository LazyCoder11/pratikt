import type { Metadata } from "next";
import { Neue } from "@/utils/customFonts";
// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratik Trivedi — Web Designer",
  description: "A Freelance Web Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Neue.variable} font-neueMontreal`}>
        {children}
      </body>
    </html>
  );
}
