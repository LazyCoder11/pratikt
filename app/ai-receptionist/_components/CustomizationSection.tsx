"use client";

import React from "react";
import { FiCheck, FiSliders } from "react-icons/fi";

export const CustomizationSection = () => {
  const configItems = [
    { title: "Services", desc: "Coaching, admission guidance, visa documentation, forex, or loan assistance." },
    { title: "Countries", desc: "Target countries your team specializes in (UK, Germany, USA, Australia, etc.)." },
    { title: "Courses", desc: "STEM degrees, business programs, diploma pathways, or vocational tracks." },
    { title: "Common student questions", desc: "Tailored answers for eligibility cutoffs, intakes, and document checklists." },
    { title: "Qualification process", desc: "Custom filtering rules based on your team's specific acceptance criteria." },
    { title: "Consultancy fees", desc: "Transparent explanation of your consultation packages and fee policies." },
    { title: "Lead qualification process", desc: "Customized data points you need before scheduling human counsellor calls." },
    { title: "Appointment workflow", desc: "Direct booking rules based on counsellor availability and branch locations." },
    { title: "Internal team process", desc: "Instant routing of leads to specific country desks or branches." },
  ];

  return (
    <section className="w-full py-10 md:py-10 px-5 md:px-12 lg:px-60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          TAILORED DEPLOYMENT
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-6">
          Built Around Your Consultancy.
        </h2>
        <p className="text-lg sm:text-xl text-[#f2f2f2a6] font-light leading-relaxed">
          Every consultancy has a different workflow. The receptionist can be
          configured around your:
        </p>
      </div>

      {/* 9 Configuration Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {configItems.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.035] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="size-1.5 rounded-full bg-white/60"></span>
                <h3 className="text-base lg:text-lg font-medium text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#f2f2f280] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Callout */}
      <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] text-center sm:text-left">
        <p className="text-base sm:text-lg text-[#f2f2f2cc] font-mono leading-relaxed">
          &ldquo;The objective is not to force your consultancy into a generic AI system. The objective is to make the system fit your workflow.&rdquo;
        </p>
      </div>
    </section>
  );
};
