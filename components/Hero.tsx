"use client";
import React, { useEffect, useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import gsap from "gsap";
import HorizontalBorder from "./ui/HorizontalBorder";
import { BiChevronDown } from "react-icons/bi";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const macHeaderRef = useRef(null);
  const headingRef1 = useRef<HTMLDivElement>(null);
  const headingRef2 = useRef<HTMLDivElement>(null);
  const headingRef3 = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef(null);
  const detsRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const macHeader = macHeaderRef.current;
    const dets = detsRef.current;
    const arrowDown = arrowRef.current;
    const words =
      headingRef1.current?.querySelectorAll<HTMLAnchorElement>("span");
    const words2 =
      headingRef2.current?.querySelectorAll<HTMLAnchorElement>("span");
    const words3 =
      headingRef3.current?.querySelectorAll<HTMLAnchorElement>("span");
    gsap.fromTo(
      [words, words2, words3],
      { y: 100, rotateZ: 5, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        stagger: 0.1,
        duration: 1.3,
        ease: "power2.inOut",
      }
    );
    gsap.set([macHeader, dets, arrowDown], {
      // y: -50,
      opacity: 0,
    });

    gsap.to(macHeader, {
      opacity: 1,
      duration: 0.5,
      // delay: 5,
    });

    gsap.to([macHeader, dets, arrowDown], {
      // y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: "power4.in",
      // delay: 5,
    });
  }, []);

  const splitTextToSpans = (text: string) => {
    return text.split(" ").map((word: string, index) => (
      <span
        key={index}
        className="inline-block mr-3 md:mr-5 select-none"
        style={{ display: "inline-block" }}
      >
        {word}
      </span>
    ));
  };

  return (
    <div className="relative h-screen pt-[150px] px-5 lg:px-60 w-full">
      <div
        ref={wrapperRef}
        className="relative overflow-hidden rounded-3xl border dark-border p-3 w-full h-full box-border"
      >
        <HorizontalBorder />
        <div className="rounded-2xl overflow-hidden border dark-border h-full">
          <div
            ref={macHeaderRef}
            className="mac-header h-[50px] overflow-hidden flex justify-between items-center gap-5"
          >
            <div className="flex gap-3 px-5">
              <div className="bg-red-800 w-4 h-4 rounded-full shadow-lg shadow-red-800"></div>
              <div className="bg-yellow-800 w-4 h-4 rounded-full shadow-lg shadow-yellow-800"></div>
              <div className="bg-green-800 w-4 h-4 rounded-full shadow-lg shadow-green-800"></div>
            </div>
          </div>
          <div className=" py-8">
            <div className="">
              <div className="px-5 lg:px-10 overflow-hidden">
                <h1
                  ref={headingRef1}
                  className="text-[11vw] text-shadow-white lg:text-[4.5vw] font-semibold tracking-wide leading-tight text-white"
                >
                  {splitTextToSpans("I bring digital visions to")}
                </h1>
              </div>
              <div className="px-5 lg:px-10 overflow-hidden">
                <h1
                  ref={headingRef2}
                  className="text-[11vw] text-shadow-white lg:text-[4.5vw] font-semibold tracking-wide leading-tight text-white"
                >
                  {splitTextToSpans("life through design &")}
                </h1>
              </div>
              <div className="px-5 lg:px-10 overflow-hidden">
                <h1
                  ref={headingRef3}
                  className="text-[11vw] text-shadow-white lg:text-[4.5vw] font-semibold tracking-wide leading-tight text-white"
                >
                  {splitTextToSpans("code.")}
                </h1>
              </div>
            </div>
            <div className="px-5 lg:px-10 relative md:float-right my-10">
              <p ref={detsRef} className="text-2xl md:text-3xl font-semibold tracking-wider">
                Freelancer. <br /> Based on Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px] absolute bottom-0 left-0 w-[100%] hero-fade flex justify-center items-center">
        <div ref={arrowRef} className="hidden md:block">
          <BiChevronDown
            className="text-white box-shadow-white mt-14"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
