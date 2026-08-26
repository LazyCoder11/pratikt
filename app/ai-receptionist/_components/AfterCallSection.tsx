"use client";

import React from "react";
import {
  FiPhoneCall,
  FiVolume2,
  FiFileText,
  FiCheckCircle,
  FiUserCheck,
  FiCalendar,
  FiLink,
} from "react-icons/fi";

export const AfterCallSection = () => {
  const artifacts = [
    {
      title: "Call Logs",
      description: "Timestamp, caller phone number, duration, language, and call resolution status.",
      icon: FiPhoneCall,
    },
    {
      title: "Call Recordings",
      description: "Secure, crystal-clear audio recordings of every prospective student call.",
      icon: FiVolume2,
    },
    {
      title: "Conversation Transcripts",
      description: "Accurate, word-for-word multilingual transcripts formatted for fast reading.",
      icon: FiFileText,
    },
    {
      title: "Call Summaries",
      description: "AI-distilled executive notes highlighting core requirements and student intent.",
      icon: FiCheckCircle,
    },
    {
      title: "Lead Information",
      description: "Parsed profile data: academic scores, target intake, countries, and urgency.",
      icon: FiUserCheck,
    },
    {
      title: "Appointment Information",
      description: "Preferred consultation timeslots, callback schedules, or office visits.",
      icon: FiCalendar,
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[#f2f2f215]">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          POST-CALL WORKFLOW
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-6">
          The Conversation Doesn&apos;t Disappear When the Call Ends.
        </h2>
        <p className="text-lg sm:text-xl text-[#f2f2f2a6] font-light leading-relaxed">
          Every inbound interaction is automatically recorded, synthesized, and
          prepared as the foundation for your lead-management workflow.
        </p>
      </div>

      {/* 6 Data Artifacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {artifacts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.035] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="size-8 rounded-lg border border-white/10 flex items-center justify-center text-white/70 mb-4 bg-white/[0.02]">
                  <Icon className="text-sm" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#f2f2f2aa] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CRM & Workflow Integration Note */}
      <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full border border-white/15 flex items-center justify-center text-white shrink-0">
            <FiLink className="text-lg" />
          </div>
          <div>
            <h4 className="text-base font-medium text-white mb-1">
              Workflow & CRM Connectivity
            </h4>
            <p className="text-sm text-[#f2f2f280] font-light">
              Can be connected to your existing workflow and CRM.
            </p>
          </div>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f2f2f260] uppercase border border-white/10 px-4 py-2 rounded-full whitespace-nowrap">
          FLEXIBLE INTEGRATION READY
        </span>
      </div>
    </section>
  );
};
