"use client";

import React from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export const LeadQualification = () => {
  const pipeline = [
    {
      step: "01",
      label: "Highest Qualification",
      example: "B.Tech / BBA / B.Com",
    },
    {
      step: "02",
      label: "CGPA / Percentage",
      example: "7.6 CGPA / 68%",
    },
    {
      step: "03",
      label: "Preferred Country",
      example: "Germany / UK / Canada",
    },
    {
      step: "04",
      label: "Preferred Intake",
      example: "Winter 2025 / Fall 2026",
    },
    {
      step: "05",
      label: "English Test Status",
      example: "IELTS 6.5 / PTE / Awaiting",
    },
    {
      step: "06",
      label: "Work Experience",
      example: "1.5 Years in IT",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[#f2f2f215]">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          STRUCTURED DATA EXTRACTION
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-6">
          Every Call Can Become Useful Context.
        </h2>
        <p className="text-lg sm:text-xl text-[#f2f2f2a6] font-light leading-relaxed">
          Instead of simply answering a call and ending the conversation, the
          receptionist can understand the student&apos;s basic profile.
        </p>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {pipeline.map((item, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-xl border border-white/[0.08] bg-white/[0.015] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#f2f2f240] uppercase block mb-3">
                  STEP {item.step}
                </span>
                <h4 className="text-sm font-medium text-white mb-2 leading-snug">
                  {item.label}
                </h4>
              </div>
              <div className="pt-3 border-t border-white/[0.06] mt-4">
                <span className="text-[11px] font-mono text-[#f2f2f280] block">
                  {item.example}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Philosophy Statement */}
      <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#f2f2f250] mb-2">
            THE PURPOSE
          </p>
          <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4 leading-snug">
            The goal is not to replace the counsellor.
          </h3>
          <p className="text-base sm:text-lg text-[#f2f2f2a6] font-light leading-relaxed">
            The goal is to make sure the counsellor starts the conversation with
            context — knowing exactly what degree, country, and academic history
            the student brings to the table before saying hello.
          </p>
        </div>
      </div>
    </section>
  );
};
