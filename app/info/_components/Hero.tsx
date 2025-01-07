"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HorizontalBorder from "@/components/ui/HorizontalBorder";
import Image from "next/image";
import { fadeIn, slideTop } from "@/lib/animations";

type Props = {};

const Hero = (props: Props) => {
  const headingRef1 = useRef<HTMLDivElement>(null);
  const headingRef2 = useRef<HTMLDivElement>(null);
  const headingRef3 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = headingRef1.current;
    const words2 = headingRef2.current;
    const words3 = headingRef3.current;
    const card = cardRef1.current;

    // Animate headings
    slideTop([words, words2, words3]);

    // Animate the card
    if (card) {
      fadeIn([card]);
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-20 items-start pt-[150px] min-h-screen mb-10 px-5 lg:px-60">
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex items-center h-full gap-x-4">
          <span className="size-4 rounded-full bg-white white-blur animate-pulse"></span>
          <h2 className="uppercase text-base">About Me</h2>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <h1
              ref={headingRef1}
              className="text-[11vw] text-shadow-white lg:text-[4vw] font-thin tracking-wide leading-tight text-white"
            >
              I build web experiences that
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={headingRef2}
              className="text-[11vw] text-shadow-white lg:text-[4vw] font-thin tracking-wide leading-tight text-white"
            >
              actually make you say <i>Hell Yeah!</i>
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div
          ref={cardRef1}
          className="relative w-full overflow-hidden rounded-3xl border dark-border p-2 md:p-3 h-full box-border featured-shadow"
        >
          <HorizontalBorder />
          <Image
            src={"/images/info/1.jpg"}
            alt="Info 1"
            width={6000}
            height={6000}
            className="size-full object-cover rounded-2xl"
          />
        </div>
        <div className="overflow-hidden">
          <h3
            ref={headingRef3}
            className="subtitle-text flex flex-1 justify-end mt-10"
          >
            This is my story — alongside with some photography
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
