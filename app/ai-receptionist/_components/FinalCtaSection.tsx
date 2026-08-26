"use client";

import React from "react";
import { CallAction } from "./CallAction";
import Link from "next/link";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export const FinalCtaSection = () => {
  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      <div className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.05] to-black/60 p-8 sm:p-14 md:p-20 text-center flex flex-col items-center overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

        {/* Small Eyebrow */}
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#f2f2f270] mb-4">
          IMMEDIATE VERIFICATION
        </span>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-shadow-white tracking-tight text-white mb-6 max-w-3xl leading-[1.05]">
          Want to Hear It Yourself?
        </h2>

        {/* Supporting Copy */}
        <div className="text-lg sm:text-xl md:text-2xl text-[#f2f2f2aa] font-light leading-relaxed max-w-2xl mb-12">
          <p>Skip the presentation.</p>
          <p>Call the AI Receptionist and have a conversation.</p>
        </div>

        {/* Prominent Large Phone Number Box */}
        <div className="p-8 sm:p-10 rounded-2xl border border-white/15 bg-black/60 backdrop-blur-xl mb-10 w-full max-w-2xl flex flex-col items-center">
          <span className="text-xs font-mono tracking-widest text-[#f2f2f260] uppercase mb-2">
            LIVE DEMO PHONE NUMBER
          </span>
          <div className="text-3xl sm:text-5xl md:text-6xl font-mono font-medium tracking-tight text-white mb-2 md:mb-8 select-all">
            +91 79714 14003
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <CallAction phoneNumber="+91 79714 14003" size="large" />
          </div>
        </div>

        {/* Secondary Contact Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-[#f2f2f280]">
          <Link
            href="mailto:owner@pratikconsultancy.site"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors"
          >
            <span>Contact Pratik</span>
            <FiArrowUpRight />
          </Link>
        </div>

        {/* Creator Attribution */}
        <div className="mt-0 md:mt-14 pt-8 w-full max-w-md">
          <p className="text-xs font-mono tracking-widest text-[#f2f2f260] uppercase">
            Built and deployed by Pratik
          </p>
        </div>
      </div>
    </section>
  );
};
