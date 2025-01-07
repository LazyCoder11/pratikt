"use client";

import HorizontalBorder from "@/components/ui/HorizontalBorder";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { fadeIn, slideTop } from "@/lib/animations";

const Intro = () => {
  // const cardRef = useRef<HTMLDivElement>(null);
  // const headingRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const card = cardRef.current;
  //   const heading = headingRef.current;

  //   slideTop([heading]);
  //   fadeIn([card]);
  // });

  return (
    // <div className="flex flex-col gap-y-20 items-start pt-[100px] min-h-screen px-5 lg:px-60">
    //   <div className="flex items-start">
    //     <div className="overflow-hidden">
    //       <h3
    //         ref={headingRef}
    //         className="subtitle-text flex flex-1 justify-end mt-10"
    //       >
    //         This is my story — alongside with some photography
    //       </h3>
    //     </div>
    //     <div
    //       ref={cardRef}
    //       className="relative w-2/3 overflow-hidden rounded-3xl border dark-border p-2 md:p-3 h-full box-border featured-shadow"
    //     >
    //       <HorizontalBorder />
    //       <Image
    //         src={"/images/info/2.jpg"}
    //         alt="Info 1"
    //         width={6000}
    //         height={6000}
    //         className="size-full object-cover rounded-xl"
    //       />
    //     </div>
    //   </div>
    // </div>
    <></>
  );
};

export default Intro;
