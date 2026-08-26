"use client";

import React from "react";
import {
  FiMap,
  FiBookOpen,
  FiAward,
  FiCalendar,
  FiTarget,
  FiAlertCircle,
} from "react-icons/fi";

export const NicheSpecialization = () => {
  const domains = [
    {
      category: "COUNTRY",
      title: "Study Destinations",
      description: "UK, Germany, Canada, Australia, USA and other study destinations.",
      icon: FiMap,
      details: ["APS requirements", "Post-study work rights", "Visa processing windows"],
    },
    {
      category: "EDUCATION",
      title: "Academic Degrees",
      description: "Bachelor's, Master's, MBA, diplomas and other qualifications.",
      icon: FiBookOpen,
      details: ["Technical & STEM programs", "Management & Business", "Diploma to Degree conversion"],
    },
    {
      category: "PROFILE",
      title: "Student Background",
      description: "CGPA, percentage, English proficiency and work experience.",
      icon: FiAward,
      details: ["IELTS / PTE / TOEFL scores", "Backlog & gap assessment", "Relevant work history"],
    },
    {
      category: "INTAKE",
      title: "Admission Cycles",
      description: "January, May, September and other relevant intakes.",
      icon: FiCalendar,
      details: ["Application deadlines", "Document preparation lead times", "Deferred admissions"],
    },
    {
      category: "INTENT",
      title: "Student Objectives",
      description: "University selection, admission guidance, visa guidance and consultancy enquiries.",
      icon: FiTarget,
      details: ["Course shortlisting", "Scholarship feasibility", "In-person appointment booking"],
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-5 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[#f2f2f215]">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#f2f2f260] block mb-3">
          BUILT FOR STUDY ABROAD CONSULTANCIES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#f2f2f2] leading-tight mb-6">
          It Understands the Conversation Behind the Enquiry.
        </h2>
        <p className="text-lg sm:text-xl text-[#f2f2f2a6] font-light leading-relaxed">
          A generic AI receptionist answers calls. This one is designed around
          the conversations education consultancies actually have.
        </p>
      </div>

      {/* 5 Specific Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {domains.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.035] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono tracking-widest text-[#f2f2f250] uppercase">
                    {item.category}
                  </span>
                  <div className="size-8 rounded-lg border border-white/10 flex items-center justify-center text-white/70">
                    <Icon className="text-sm" />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#f2f2f2cc] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                {item.details.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    className="text-xs font-mono text-[#f2f2f260] flex items-center gap-2"
                  >
                    <span className="size-1 rounded-full bg-white/40"></span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Boundary / Compliance Statement */}
      <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-4">
        <FiAlertCircle className="text-lg text-[#f2f2f280] shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-mono tracking-wider uppercase text-[#f2f2f260] mb-1">
            PROFESSIONAL SCOPE
          </p>
          <p className="text-sm sm:text-base text-[#f2f2f2cc] font-light">
            First-level guidance only. Personalised immigration and admission
            decisions remain with qualified counsellors.
          </p>
        </div>
      </div>
    </section>
  );
};
