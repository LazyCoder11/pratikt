"use client";

import React, { useEffect, useRef } from "react";
import { CallAction } from "./CallAction";
import HorizontalBorder from "@/components/ui/HorizontalBorder";
import { FiArrowDown, FiShield, FiGlobe, FiPhoneIncoming } from "react-icons/fi";
import gsap from "gsap";
import ServiceCard from "@/components/ui/ServiceCard";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        copyRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6"
      );
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-[130px] md:pt-[180px] pb-16 md:pb-24 px-5 lg:px-60 flex flex-col items-start">
      {/* Eyebrow */}
      <div
        className="flex items-center h-full gap-x-4"
      >
        <span className="size-2 rounded-full bg-[#ffffff] animate-pulse white-blur "></span>
        <span className="uppercase text-base">
          FOR EDUCATION CONSULTANCIES
        </span>
      </div>

      {/* Main Headline */}
      <div className="w-full my-6">
        <h1
          ref={headlineRef}
          className="text-[11vw] text-shadow-white lg:text-[4vw] font-thin tracking-wide leading-tight text-white"
        >
          Never Miss a Student Enquiry Again.
        </h1>
      </div>

      {/* Supporting Headline */}
      <p
        ref={copyRef}
        className="text-lg sm:text-xl md:text-2xl text-[#f2f2f2a6] font-light leading-relaxed max-w-3xl mb-10 tracking-wide"
      >
        An AI voice receptionist built specifically for overseas education and
        visa consultancies. It answers calls, speaks naturally in Gujarati,
        Hindi and English, qualifies student enquiries and helps your team
        capture more opportunities.
      </p>

      {/* Primary and Secondary CTA Row */}
      <div ref={ctaRef} className="w-full flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <CallAction phoneNumber="+91 79714 14003" size="large" />
        </div>

        {/* Small supporting line below the CTA */}
        <div className="flex flex-col sm:flex-row text-center sm:items-center gap-2 sm:gap-6 text-base text-[#f2f2f280]">
          <p className="font-mono tracking-tight text-[#f2f2f2cc]">
            &ldquo;Call the number. Pretend you&apos;re a student. Ask anything.&rdquo;
          </p>
        </div>
      </div>

      {/* Hero Overview Grid — Instant 4-point Value Check */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-16 pt-12">
        <ServiceCard
          id="01 / Product"
          title="Autonomous Voice Agent"
          description="Real-time human-level voice receptionist on your telephone line."
        />
        <ServiceCard
          id="02 / Purpose-Built"
          title="Overseas Education"
          description="Trained on intakes, study destinations, CGPA, tests, and visas."
        />
        <ServiceCard
          id="03 / Multilingual"
          title="Gujarati / Hindi / English"
          description="Seamless code-switching mid-conversation matching student speech."
        />
        <ServiceCard
          id=" 04 / Outcome"
          title="Zero Dropped Enquiries"
          description=" Instant 24/7 qualification with detailed summaries to your team."
        />
      </div>
    </section>
  );
};
