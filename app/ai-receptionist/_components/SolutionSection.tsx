"use client";

import React from "react";
import { CallAction } from "./CallAction";
import {
  FiPhoneForwarded,
  FiCpu,
  FiGlobe,
  FiHelpCircle,
  FiCheckSquare,
  FiMapPin,
  FiUserPlus,
  FiCompass,
  FiCalendar,
  FiFileText,
} from "react-icons/fi";

export const SolutionSection = () => {
  const capabilities = [
    {
      title: "Answer incoming calls",
      description: "Picks up on the first ring, 24/7/365, without delays or missed queues.",
      icon: FiPhoneForwarded,
    },
    {
      title: "Understand the student's enquiry",
      description: "Accurately parses natural intent, background, and academic goals.",
      icon: FiCpu,
    },
    {
      title: "Speak Gujarati, Hindi and English",
      description: "Speaks naturally in native regional accents without robotic stutters.",
      icon: FiGlobe,
    },
    {
      title: "Answer common questions",
      description: "Clarifies requirements, documents, intake deadlines, and office details.",
      icon: FiHelpCircle,
    },
    {
      title: "Ask relevant qualification questions",
      description: "Politely asks for highest degree, GPA/percentage, IELTS/PTE scores.",
      icon: FiCheckSquare,
    },
    {
      title: "Understand country and intake preferences",
      description: "Maps student preferences across UK, Germany, USA, Canada, Australia, etc.",
      icon: FiMapPin,
    },
    {
      title: "Capture lead information",
      description: "Securely logs student name, contact, city, and verified callback details.",
      icon: FiUserPlus,
    },
    {
      title: "Provide first-level guidance",
      description: "Offers grounded direction on eligibility criteria and destination pathways.",
      icon: FiCompass,
    },
    {
      title: "Help schedule a consultation",
      description: "Coordinates preferred callback slots or in-office counsellor meetings.",
      icon: FiCalendar,
    },
    {
      title: "Create a structured call summary for the team",
      description: "Sends concise, actionable briefing notes directly to counsellors.",
      icon: FiFileText,
    },
  ];

  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      {/* Header */}
      <div className="max-w-3xl mb-8 md:mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          THE SOLUTION
        </span>
        <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-[#f2f2f2] text-shadow-white leading-tight">
          A Receptionist That Answers First.
        </h2>
        <p className="text-lg sm:text-xl text-[#f2f2f2a6] font-light leading-relaxed mt-6">
          The AI Receptionist handles the first conversation with a prospective
          student before your counsellor ever needs to step in.
        </p>
      </div>

      {/* Capabilities 10-Item Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl border dark-border hover:bg-white/[0.035] hover:border-white/20 transition-all duration-300 flex flex-row lg:flex-col gap-5 items-start"
            >
              <div className="size-20 p-2 rounded-lg border dark-border flex items-center justify-center text-white/80 bg-white/[0.02]">
                <Icon className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#f2f2f270] leading-relaxed mt-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inline CTA Callout */}
      <div className="p-8 rounded-2xl border dark-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-medium text-white mb-1">
            Experience the automated qualification flow
          </h3>
          <p className="text-sm text-[#f2f2f280] font-light">
            Dial the live demo number right now and test all 10 capabilities in real-time.
          </p>
        </div>
        <CallAction phoneNumber="+91 79714 14003" size="default" />
      </div>
    </section>
  );
};
