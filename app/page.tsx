"use client";

import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  return (
    <main className="min-h-screen w-screen overflow-hidden background color hero">
      <Navbar />
      <Hero />
      <Featured />
      <Footer/>
    </main>
  );
}
