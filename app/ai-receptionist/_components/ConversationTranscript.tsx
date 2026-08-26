"use client";

import React from "react";
import { FiPhoneCall, FiUser, FiCpu, FiCheckCircle } from "react-icons/fi";

export const ConversationTranscript = () => {
  const messages = [
    {
      speaker: "STUDENT",
      role: "Caller",
      text: "I want to study Master's in Germany.",
      timestamp: "00:04",
      isAi: false,
    },
    {
      speaker: "AI RECEPTIONIST",
      role: "Voice Agent",
      text: "Sure. I can help you with that. May I know your highest qualification?",
      timestamp: "00:08",
      isAi: true,
    },
    {
      speaker: "STUDENT",
      role: "Caller",
      text: "Bachelor's in Computer Engineering.",
      timestamp: "00:13",
      isAi: false,
    },
    {
      speaker: "AI RECEPTIONIST",
      role: "Voice Agent",
      text: "Perfect. And what was your overall CGPA or percentage?",
      timestamp: "00:17",
      isAi: true,
    },
    {
      speaker: "STUDENT",
      role: "Caller",
      text: "7.6 CGPA.",
      timestamp: "00:21",
      isAi: false,
    },
    {
      speaker: "AI RECEPTIONIST",
      role: "Voice Agent",
      text: "Got it. Are you planning for a particular intake? We have options for Winter and Summer.",
      timestamp: "00:26",
      isAi: true,
    },
    {
      speaker: "STUDENT",
      role: "Caller",
      text: "Winter 2025 preferred. Can I book a consultation with a counsellor?",
      timestamp: "00:32",
      isAi: false,
    },
    {
      speaker: "AI RECEPTIONIST",
      role: "Voice Agent",
      text: "Absolutely. I've noted your profile for Master's in Germany, B.Tech CSE with 7.6 CGPA for Winter 2025. Our senior Germany counsellor will call you tomorrow at 11:00 AM.",
      timestamp: "00:40",
      isAi: true,
    },
  ];

  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          REAL USE CASE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-4">
          What a Real Student Conversation Looks Like.
        </h2>
        <p className="text-base sm:text-lg text-[#f2f2f299] font-light">
          A concise, authentic telephone dialogue demonstrating natural voice interaction and qualification.
        </p>
      </div>

      {/* Transcript Container / Clean Audio Log UI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: The Conversation Stream */}
        <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-white/[0.015] p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono text-[#f2f2f260]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400"></span>
              <span>LIVE CALL SIMULATION • DURATION: 00:48</span>
            </div>
            <span>INBOUND #8924</span>
          </div>

          <div className="space-y-4 pt-2">
            {messages.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-colors ${item.isAi
                  ? "border-white/15 bg-white/[0.035] ml-4 sm:ml-8"
                  : "border-white/[0.06] bg-black/30 mr-4 sm:mr-8"
                  }`}
              >
                <div className="flex items-center justify-between mb-1.5 text-xs font-mono">
                  <span
                    className={`font-semibold tracking-wider ${item.isAi ? "text-white" : "text-[#f2f2f270]"
                      }`}
                  >
                    {item.speaker}
                  </span>
                  <span className="text-[#f2f2f240]">{item.timestamp}</span>
                </div>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${item.isAi ? "text-[#f2f2f2]" : "text-[#f2f2f2cc]"
                    }`}
                >
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Instant Output Context Card */}
        <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#f2f2f250] uppercase">
            <FiCheckCircle className="text-emerald-400" />
            <span>EXTRACTED LEAD CONTEXT</span>
          </div>

          <div className="space-y-3 font-mono text-xs text-[#f2f2f2cc]">
            <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
              <span className="text-[#f2f2f250] block text-[10px] uppercase">
                Country & Degree
              </span>
              <p className="text-sm font-sans font-medium text-white mt-0.5">
                Germany — Master&apos;s
              </p>
            </div>

            <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
              <span className="text-[#f2f2f250] block text-[10px] uppercase">
                Academic Background
              </span>
              <p className="text-sm font-sans font-medium text-white mt-0.5">
                B.Tech Computer Engineering (7.6 CGPA)
              </p>
            </div>

            <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
              <span className="text-[#f2f2f250] block text-[10px] uppercase">
                Target Intake
              </span>
              <p className="text-sm font-sans font-medium text-white mt-0.5">
                Winter 2025
              </p>
            </div>

            <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
              <span className="text-[#f2f2f250] block text-[10px] uppercase">
                Next Action
              </span>
              <p className="text-sm font-sans font-medium text-white mt-0.5">
                Counsellor Callback — Tomorrow 11:00 AM
              </p>
            </div>
          </div>

          <p className="text-xs text-[#f2f2f260] font-light leading-relaxed pt-2 border-t border-white/[0.06]">
            The counsellor steps in with full context, skipping repetitive questioning.
          </p>
        </div>
      </div>
    </section>
  );
};
