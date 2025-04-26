"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { fadeIn, slideTop } from "@/lib/animations";
import React, { useEffect, useRef } from "react";

const Services = () => {
  const headingRef1 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const words = headingRef1.current;
    const card = cardRef1.current;

    // Animate headings
    slideTop([words]);

    // Animate the card
    if (card) {
      fadeIn([card]);
    }
  }, []);
  return (
    <section className="px-5 lg:px-60 min-h-screen lg:pt-[100px]">
      <div className="">
        <div className="overflow-hidden">
          <h1
            ref={headingRef1}
            className="text-[8vw] text-shadow-white lg:text-[4vw] font-thin tracking-wide leading-tight text-foreground"
          >
            I can help you with...
          </h1>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ServiceCard
            id="01"
            title="Design"
            description="With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)"
          />
          <ServiceCard
            id="02"
            title="Development"
            description="I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction with the best SEO Practices ( like a salt for the taste ). Building with NextJs, Webflow, WordPress, Shopify."
          />
          <ServiceCard
            id="03"
            title="Full Package"
            description="A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
