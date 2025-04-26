"use client";

import HorizontalBorder from "@/components/ui/HorizontalBorder";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { fadeIn, slideTop } from "@/lib/animations";

const Intro = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const headings = document.querySelectorAll(".animate-text");

    slideTop(Array.from(headings)); // Spread NodeList into an array
    fadeIn([card]);
  }, []);

  return (
    <div className="flex flex-col gap-y-20 items-start lg:pt-[100px] px-5 lg:px-60">
      <div className="grid gride-cols-1 md:grid-cols-2  w-full gap-x-5">
        <div className="mt-10 ">
          <div className="overflow-hidden">
            <h3 className="subtitle-text animate-text text-[#f2f2f299]">
              Yes sir, I&apos;m too a web developer.
            </h3>
          </div>
          <div className="overflow-hidden">
            <h3 className="subtitle-text animate-text text-white">
              — but a <i>creative</i> one (you saw the projects, right?).
            </h3>
          </div>
          <div className="overflow-hidden my-5">
            <h3 className="heading-text animate-text">Education</h3>
          </div>
          <div className="overflow-hidden">
            <h3 className="subtitle-text animate-text text-[#f2f2f299]">
              In the June 2024, Graduated from Vadodara Institute of Eng.
              (VIER). But learned all the coding by my self. Through YouTube &
              Documentations.
            </h3>
          </div>
          <div className="overflow-hidden my-5">
            <h3 className="subtitle-text animate-text text-[#f2f2f299]">
              I loved the NextJS concepts. So I decided to learn it directly. I
              don&apos;t know React fr. And the docs really helped me to learn
              the language.
            </h3>
          </div>
        </div>
        <div className="my-10">
          <div
            ref={cardRef}
            className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 h-full box-border featured-shadow"
          >
            <HorizontalBorder />
            <Image
              src={"/images/info/2.jpg"}
              alt="Info 1"
              width={6000}
              height={6000}
              className="object-cover aspect-[16/10] rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
