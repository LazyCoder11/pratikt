"use client";

import React from "react";
import { FiPhone, FiCpu, FiMessageSquare, FiUsers } from "react-icons/fi";

export const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Student Calls",
      description: "The student calls the consultancy's number.",
      detail:
        "Direct inbound call on your existing phone number or dedicated demo line at any time of the day.",
      icon: FiPhone,
    },
    {
      step: "02",
      title: "AI Receptionist Answers",
      description:
        "The receptionist understands the enquiry and responds naturally.",
      detail:
        "Zero hold time. Greeted warmly in Gujarati, Hindi, or English based on how the student speaks.",
      icon: FiCpu,
    },
    {
      step: "03",
      title: "Student Gets First-Level Guidance",
      description:
        "The AI answers common questions and collects relevant information about the student's profile.",
      detail:
        "Provides basic destination pathways, admission criteria, and gathers CGPA, target intake, and IELTS scores.",
      icon: FiMessageSquare,
    },
    {
      step: "04",
      title: "Your Team Gets the Context",
      description:
        "The conversation, lead information and call summary can be organized for the consultancy team.",
      detail:
        "Counsellors receive structured summaries and callback appointments before dialing the student.",
      icon: FiUsers,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60"
    >
      {/* Header */}
      <div className="max-w-3xl mb-10 md:mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          THE PROCESS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-4">
          From Phone Call to Qualified Enquiry.
        </h2>
        <p className="text-base sm:text-lg text-[#f2f2f299] font-light">
          A seamless transition from student curiosity to actionable consultation.
        </p>
      </div>

      {/* 4-Step Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative p-7 rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-0 md:mb-6">
                  <span className="text-xs font-mono tracking-widest text-[#f2f2f240]">
                    STEP {item.step}
                  </span>
                  <div className="size-8 rounded-lg border border-white/10 flex items-center justify-center text-white/70">
                    <Icon className="text-sm" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-medium text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#f2f2f2cc] font-light leading-relaxed mb-3 md:mb-0">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-[#f2f2f260] font-light leading-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Distinction Note */}
      <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] text-center sm:text-left">
        <p className="text-sm sm:text-base text-[#f2f2f2cc] font-mono">
          &ldquo;The AI handles the first conversation. Your counsellors handle the personalised consultation.&rdquo;
        </p>
      </div>
    </section>
  );
};
