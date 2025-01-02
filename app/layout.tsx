import type { Metadata } from "next";
import { Neue } from "@/utils/customFonts";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
