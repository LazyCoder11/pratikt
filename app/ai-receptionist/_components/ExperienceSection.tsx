"use client";

import React, { useState } from "react";
import { CallAction } from "./CallAction";
import { FiPhoneCall, FiMic, FiVolume2, FiRadio } from "react-icons/fi";
import HorizontalBorder from "@/components/ui/HorizontalBorder";

export const ExperienceSection = () => {
  const sampleQueries = [
    {
      language: "Gujarati",
      label: "Master's in Germany Enquiry",
      quote: "Germany ma Master's karvu che. Shu requirements che?",
      translation: "I want to do a Master's in Germany. What are the requirements?",
      intent: "Language code-switching & country requirement enquiry",
    },
    {
      language: "English",
      label: "UK Study Opportunity",
      quote: "I want to study in the UK. Can you help me?",
      translation: "Direct intent & intake exploration",
      intent: "General destination and intake consultation request",
    },
    {
      language: "Gujarati / Mixed",
      label: "CGPA & Eligibility Check",
      quote: "Mara 7 CGPA che. Hu eligible chu?",
      translation: "I have a 7 CGPA. Am I eligible?",
      intent: "Profile qualification & academic criteria evaluation",
    },
    {
      language: "English / Hindi",
      label: "Consultancy Fee & Process",
      quote: "How much does the consultancy charge?",
      translation: "Direct pricing & service scope clarification",
      intent: "Commercial policies & consultation scheduling",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-10 md:py-8 px-5 md:px-12 lg:px-60"
    >
      <div className="relative rounded-3xl border dark-border bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 md:p-12 overflow-hidden">
        {/* Live System Indicator */}
        <div className="flex items-center gap-3 mb-8">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[11px] font-mono tracking-widest text-[#f2f2f2] uppercase">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE DEMO LINE ACTIVE
          </span>
          <span className="hidden sm:inline text-xs font-mono text-[#f2f2f250]">
            NO REGISTRATION REQUIRED
          </span>
        </div>

        <div className="flex flex-col md:flex-row mb-6 justify-between">
          {/* Headline & Explanation */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#f2f2f2] mb-6">
              Don&apos;t Take Our Word for It. Call It.
            </h2>
            <p className="text-lg sm:text-xl text-[#f2f2f2a6] font-light leading-relaxed">
              You don&apos;t need to watch a product video or sit through a sales
              presentation. Call the number and have a real conversation with the
              receptionist.
            </p>
          </div>

          {/* Large Prominent Phone Number Block */}
          <div className="lg:w-fit p-8 sm:p-10 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-xl">
            <span className="text-xs font-mono tracking-widest text-[#f2f2f260] uppercase block mb-2">
              DIRECT DEMO LINE
            </span>
            <div className="text-3xl sm:text-5xl md:text-6xl font-mono font-medium tracking-tight text-white select-all">
              +91 79714 14003
            </div>
            {/* <CallAction phoneNumber="+91 79714 14003" size="default" /> */}
          </div>
        </div>
        <HorizontalBorder />
        {/* Real Spoken Student Queries Showcase */}
        <div className="border-t dark-border pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mt-1">
                Try asking natural, unscripted questions:
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#f2f2f260]">
              <FiMic className="text-sm" />
              <span>Real spoken examples</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleQueries.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#f2f2f260] border border-white/10 px-2.5 py-0.5 rounded-full">
                      {item.language}
                    </span>
                    {/* <span className="text-xs text-[#f2f2f240] font-mono">
                      {item.label}
                    </span> */}
                  </div>

                  {/* Real Student Speech Callout */}
                  <blockquote className="text-lg md:text-xl font-normal text-white italic tracking-wide leading-snug my-3">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#f2f2f260] font-light mt-6 text-center sm:text-left">
            The agent handles spontaneous questions, interruptions, regional accents, and language switching without scripted button menus.
          </p>
        </div>
      </div>
    </section>
  );
};
