"use client";

import Hero from "./_components/Hero";
import React from "react";
import Intro from "./_components/Intro";
import Services from "./_components/Services";
import Footer from "@/components/Footer";

const Info = () => {
  return (
    <div className="hero background color min-h-screen">
      <Hero />
      <Intro />
      <Services />
      <Footer />
    </div>
  );
};

export default Info;
