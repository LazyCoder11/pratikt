"use client";

import React from "react";
import { FiGlobe, FiCornerDownRight, FiCpu, FiMessageCircle } from "react-icons/fi";

export const MultilingualSection = () => {
  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          MULTILINGUAL BY DESIGN
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-6">
          Speak to Students the Way They Actually Speak.
        </h2>
        <p className="text-lg sm:text-xl text-[#f2f2f2a6] font-light leading-relaxed">
          Students do not always speak formal English. The receptionist can
          handle natural conversations in:
        </p>
      </div>

      {/* Languages Trio Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Gujarati Card — High Differentiator */}
        <div className="relative p-8 rounded-2xl border-2 border-white/20 bg-white/[0.03] flex flex-col justify-between">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 rounded-full border border-white/20 bg-white/10 text-[10px] font-mono uppercase tracking-widest text-white">
              KEY MARKET DIFFERENTIATOR
            </span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#f2f2f250] tracking-widest uppercase block mb-3">
              REGIONAL SPECIALTY
            </span>
            <h3 className="text-3xl font-medium text-white mb-3">Gujarati</h3>
            <p className="text-sm text-[#f2f2f2cc] font-light leading-relaxed mb-6">
              Trained on colloquial Gujarati phrasing, regional tones, and mixed
              vernacular spoken across Gujarat&apos;s major study-abroad hubs
              (Ahmedabad, Surat, Vadodara, Rajkot).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-black/40 font-mono text-xs text-[#f2f2f2aa]">
            &ldquo;Germany ma Master&apos;s karvu che, intake kyare male?&rdquo;
          </div>
        </div>

        {/* Hindi Card */}
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.015] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-[#f2f2f250] tracking-widest uppercase block mb-3">
              PAN-INDIA ADAPTABILITY
            </span>
            <h3 className="text-3xl font-medium text-white mb-3">Hindi</h3>
            <p className="text-sm text-[#f2f2f2cc] font-light leading-relaxed mb-6">
              Handles conversational Hindi and Hinglish effortlessly,
              understanding student intent without awkward formal translation
              delays.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-black/40 font-mono text-xs text-[#f2f2f2aa]">
            &ldquo;Mujhe UK me September intake ke liye apply karna hai.&rdquo;
          </div>
        </div>

        {/* English Card */}
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.015] flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-[#f2f2f250] tracking-widest uppercase block mb-3">
              GLOBAL STANDARD
            </span>
            <h3 className="text-3xl font-medium text-white mb-3">English</h3>
            <p className="text-sm text-[#f2f2f2cc] font-light leading-relaxed mb-6">
              Fluent, professional English communication suited for direct
              academic evaluations, score checks, and university prerequisite
              discussions.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-black/40 font-mono text-xs text-[#f2f2f2aa]">
            &ldquo;What is the minimum IELTS band score required for Canada?&rdquo;
          </div>
        </div>
      </div>

      {/* Code-Switching Technical Callout */}
      <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xl font-medium text-white mb-2">
              Mid-Call Dynamic Language-Switching
            </h4>
            <p className="text-base text-[#f2f2f299] font-light leading-relaxed">
              Students rarely stick to one formal language on phone calls. A
              student might start in English, switch to Gujarati to explain a
              concern, and clarify dates in Hindi. The AI Receptionist tracks
              context across languages continuously.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#f2f2f280] border border-white/10 px-5 py-3 rounded-xl bg-black/30">
            <span>Gujarati</span>
            <FiCornerDownRight className="text-white" />
            <span>Hindi</span>
            <FiCornerDownRight className="text-white" />
            <span>English</span>
          </div>
        </div>
      </div>
    </section>
  );
};
