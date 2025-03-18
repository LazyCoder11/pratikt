"use client";

import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {/* {isLoading && <LoadingScreen />} */}
      {/* <LoadingScreen/> */}
      {/* // ${ isLoading ? "blur-sm" : "blur-none"}` */}

      <main
        className={`min-h-screen w-screen overflow-hidden background color hero transition-all duration-500`}
      >
        <Hero />
        <Featured />
        <Contact/>
        <Footer />
      </main>
    </>
  );
}
