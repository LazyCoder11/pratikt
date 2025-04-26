"use client";

import Hero from "./_components/Hero";
import React from "react";
import Intro from "./_components/Intro";
import Services from "./_components/Services";

const Info = () => {
  return (
    <div className="hero background color min-h-screen">
      <Hero />
      <Intro />
      <Services />
    </div>
  );
};

export default Info;
