"use client";

import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface ThumbnailDetails {
  url: string;
  alt: string;
}

const ProjectThumbnail: FC<ThumbnailDetails> = ({ url, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const thumbnail = imageRef.current;

    if (thumbnail) {
      gsap.set([thumbnail], {
        opacity: 0,
      });

      // Create a ScrollTrigger animation
      gsap.to([thumbnail], {
        scrollTrigger: {
          trigger: thumbnail,
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          toggleActions: "play none none none", // Play animation on enter, don't reset on leave
        },
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power4.in",
      });
    }
  }, []);

  return (
    <div className="flex h-full w-full justify-center md:mt-10 thumbnail">
      <Image
        width={2000}
        height={2000}
        ref={imageRef}
        className="w-full lg:w-[90%] object-cover aspect-video border dark-border scale-110 md:scale-100 rounded-2xl h-full lg:h-full md:-mb-20 mt-8 thumbnail-shadow"
        src={url}
        alt={alt}
        priority
      />
    </div>
  );
};

export default ProjectThumbnail;
