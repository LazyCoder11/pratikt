"use client";

import React from "react";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

export const CaseStudySection = () => {
  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      {/* Header with Early Implementation Badge */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-mono tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full text-white bg-white/[0.05]">
          Early implementation
        </span>
      </div>

      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-4">
          Built and Tested for a Real Consultancy.
        </h2>
        <p className="text-base sm:text-lg text-[#f2f2f299] font-light">
          Field-tested in real overseas education environments to understand how students actually enquire.
        </p>
      </div>

      {/* Case Study Feature Card */}
      <div className="p-8 sm:p-12 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.03] to-white/[0.01] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#f2f2f250] uppercase block mb-1">
              DEPLOYMENT CLIENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              OM Technolab LLP
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#f2f2f280] border border-white/10 px-4 py-2 rounded-full">
            <span className="size-2 rounded-full bg-white animate-pulse"></span>
            <span>OVERSEAS EDUCATION & VISA DIVISION</span>
          </div>
        </div>

        <div className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6 items-start">
          <blockquote className="text-lg sm:text-xl font-light text-[#f2f2f2e6] leading-relaxed italic mb-8">
            &ldquo;The AI Receptionist was designed around the real conversations handled by an overseas education consultancy, including student enquiries, country selection, educational profiles, consultancy questions and appointment follow-up.&rdquo;
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs text-[#f2f2f280]">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/30">
              <span className="text-[#f2f2f240] block mb-1">CALL PROFILE</span>
              <span className="text-white">Inbound Student Queries</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/30">
              <span className="text-[#f2f2f240] block mb-1">LANGUAGES</span>
              <span className="text-white">Gujarati, Hindi, English</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-black/30">
              <span className="text-[#f2f2f240] block mb-1">STAGE</span>
              <span className="text-white">Live Field Evaluation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
