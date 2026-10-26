"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { fadeIn, slideTop } from "@/lib/animations";
import Experience from "./Experience";

type Props = {};

const Hero = (props: Props) => {
  const headingRef1 = useRef<HTMLDivElement>(null);
  const headingRef2 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = headingRef1.current;
    const words2 = headingRef2.current;
    const card = cardRef1.current;

    // Animate headings
    slideTop([words, words2]);

    // Animate the card
    if (card) {
      fadeIn([card]);
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-20 items-start w-full pt-[150px] lg:min-h-screen mb-10 px-5 lg:px-60">
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex items-center h-full gap-x-4">
          <span className="size-2 rounded-full bg-[#ffffff] animate-pulse white-blur "></span>
          <h2 className="uppercase text-base">About Me</h2>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <h1
              ref={headingRef1}
              className="text-[11vw] text-shadow-white lg:text-[4vw] font-thin tracking-wide leading-tight text-white"
            >
              I&apos;ve been writing production-
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={headingRef2}
              className="text-[11vw] text-shadow-white lg:text-[4vw] font-thin tracking-wide leading-tight text-white"
            >
              code for <i>3+ years</i> now
            </h1>
          </div>
        </div>
      </div>
      <div ref={cardRef1} className="w-full">
        <Experience />
      </div>
    </div>
  );
};

export default Hero;
