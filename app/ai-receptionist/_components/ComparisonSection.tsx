"use client";

import React from "react";
import { FiX, FiCheck } from "react-icons/fi";

export const ComparisonSection = () => {
  const comparisonRows = [
    {
      feature: "Understanding Core Intent",
      generic: "Answers simple questions literally",
      specialized: "Understands academic backgrounds, admissions, and student goals",
    },
    {
      feature: "Conversation Flexibility",
      generic: "Reads static predetermined scripts",
      specialized: "Handles dynamic, education-specific conversations naturally",
    },
    {
      feature: "Information Gathering",
      generic: "Handles only basic FAQ lookup",
      specialized: "Collects relevant student profile information (CGPA, intake, test scores)",
    },
    {
      feature: "Language & Regional Dialects",
      generic: "Restricted to formal neutral English",
      specialized: "Fluent in Gujarati, Hindi, and English with fluid code-switching",
    },
    {
      feature: "Consultancy Alignment",
      generic: "Designed for general businesses",
      specialized: "Designed around the consultancy's actual workflow and admissions cycle",
    },
  ];

  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          CLEAR DIFFERENTIATION
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-4">
          Not Another Generic AI Voice Bot.
        </h2>
        <p className="text-base sm:text-lg text-[#f2f2f299] font-light">
          A side-by-side comparison of general-purpose voice technology versus a specialist education receptionist.
        </p>
      </div>

      {/* Mobile Card View (< md) */}
      <div className="md:hidden space-y-4">
        {comparisonRows.map((row, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3.5"
          >
            <h3 className="text-base font-medium text-white tracking-wide border-b border-white/[0.08] pb-2.5">
              {row.feature}
            </h3>

            {/* AI Receptionist - Highlighted */}
            <div className="p-3.5 rounded-xl border border-white/20 bg-white/[0.04]">
              <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase block mb-1.5 font-medium">
                AI RECEPTIONIST FOR CONSULTANCIES
              </span>
              <div className="flex items-start gap-2.5 text-sm text-white">
                <span className="size-4 rounded-full border border-white/50 flex items-center justify-center shrink-0 mt-0.5 text-[10px] text-white">
                  ✓
                </span>
                <span className="font-normal leading-relaxed">{row.specialized}</span>
              </div>
            </div>

            {/* Generic Voice Bot - Muted */}
            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-black/40">
              <span className="text-[10px] font-mono tracking-widest text-[#f2f2f240] uppercase block mb-1.5">
                GENERIC VOICE BOT
              </span>
              <div className="flex items-start gap-2.5 text-sm text-[#f2f2f270]">
                <span className="size-4 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[10px] text-[#f2f2f240]">
                  -
                </span>
                <span className="font-light leading-relaxed">{row.generic}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View (>= md) */}
      <div className="hidden md:block rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 border-b border-white/10 text-xs font-mono tracking-widest uppercase">
          <div className="col-span-4 p-5 text-[#f2f2f260]">
            CAPABILITY / DIMENSION
          </div>
          <div className="col-span-4 p-5 text-[#f2f2f250] bg-white/[0.01] border-r border-white/10">
            GENERIC VOICE BOT
          </div>
          <div className="col-span-4 p-5 text-white bg-white/[0.04] font-medium">
            AI RECEPTIONIST FOR CONSULTANCIES
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/[0.06]">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-4 p-5 flex items-center text-sm font-medium text-[#f2f2f2] border-r border-white/[0.06]">
                {row.feature}
              </div>
              <div className="col-span-4 p-5 flex items-start gap-3 text-sm text-[#f2f2f280] font-light border-r border-white/[0.06] bg-black/20">
                <span className="size-5 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-xs text-[#f2f2f240]">
                  -
                </span>
                <span>{row.generic}</span>
              </div>
              <div className="col-span-4 p-5 flex items-start gap-3 text-sm text-white font-normal bg-white/[0.02]">
                <span className="size-5 rounded-full border border-white/30 flex items-center justify-center shrink-0 mt-0.5 text-xs text-white">
                  ✓
                </span>
                <span>{row.specialized}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
