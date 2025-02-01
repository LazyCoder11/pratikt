"use client";

import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Set loading to false after a delay
    const timeout = setTimeout(() => setIsLoading(false), 5000);

    return () => clearTimeout(timeout);
  }, []);

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
        <Footer />
      </main>
    </>
  );
}
