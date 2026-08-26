"use client";

import HorizontalBorder from "@/components/ui/HorizontalBorder";
import React from "react";
import { FiPhoneMissed, FiRepeat, FiClock, FiFileText } from "react-icons/fi";

export const ProblemSection = () => {
  const problems = [
    {
      code: "01",
      title: "MISSED CALLS",
      description:
        "Important enquiries disappear when nobody is available to answer.",
      icon: FiPhoneMissed,
      detail:
        "Evening calls, weekend enquiries, and peak admission surges slip away without a response.",
    },
    {
      code: "02",
      title: "REPEATED QUESTIONS",
      description:
        "Counsellors spend valuable time answering the same basic questions again and again.",
      icon: FiRepeat,
      detail:
        "Office hours, minimum intake deadlines, basic tuition estimates, and country lists consume hours.",
    },
    {
      code: "03",
      title: "SLOW FOLLOW-UP",
      description:
        "Potential students may move to another consultancy before your team responds.",
      icon: FiClock,
      detail:
        "Students compare 3–4 consultancies simultaneously. The first one to hold a helpful conversation wins the trust.",
    },
    {
      code: "04",
      title: "LOST CONTEXT",
      description:
        "When a lead finally reaches your team, important information may still need to be collected.",
      icon: FiFileText,
      detail:
        "Counsellors restart from zero without knowing target degree, CGPA, IELTS status, or intake.",
    },
  ];

  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      {/* Section Eyebrow & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
        <div className="max-w-2xl">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
            THE CONSULTANCY BOTTLENECK
          </span>
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-[#f2f2f2] text-shadow-white leading-tight">
            Your Team Can&apos;t Answer Every Call.
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[#f2f2f299] max-w-md font-light leading-relaxed">
          Students call when your counsellors are busy, after office hours, or
          while another enquiry is already being handled. Every unanswered call
          can become a missed opportunity.
        </p>
      </div>

      {/* 4 Concise Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <div
              key={problem.code}
              className="group p-2 lg:p-3 relative rounded-3xl overflow-hidden border dark-border bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <HorizontalBorder />
              <div className="dark-border featured-bg flex flex-col gap-3 md:gap-0 border dark-border h-full rounded-2xl p-3 md:p-8">
                <div className="flex items-center justify-between mb-0 md:mb-3">
                  <span className="font-mono text-xs text-[#f2f2f240] tracking-widest">
                    PROBLEM {problem.code}
                  </span>
                  <div className="size-9 rounded-full border border-white/10 flex items-center justify-center text-[#f2f2f280] group-hover:text-white group-hover:border-white/20 transition-colors">
                    <Icon className="text-base" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold tracking-wider text-[#f2f2f2] mb-0 md:mb-3">
                  {problem.title}
                </h3>
                <p className="text-base text-[#f2f2f2cc] font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>

              <p className="text-base text-[#f2f2f260] font-mono pt-4">
                {problem.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
