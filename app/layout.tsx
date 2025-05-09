import type { Metadata } from "next";
import { Neue } from "@/utils/customFonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisScroll from "@/components/global/ScrollWrapper";
import { Analytics } from "@vercel/analytics/react";
import { BackgroundMusic } from "@/components/global/BackgroundMusic";

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
      <head>
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js?pid=UT8quN98W4X9oAdL&version=062024"
        ></script>
      </head>
      <body className={`${Neue.variable} font-neueMontreal`}>
        <BackgroundMusic />
        <Analytics />
        <LenisScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
