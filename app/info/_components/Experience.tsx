"use client";

import React, { useState } from "react";
import HorizontalBorder from "@/components/ui/HorizontalBorder";
import { FiArrowUpRight, FiBriefcase, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location?: string;
  isCurrent?: boolean;
  url?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "growyourcorp",
    role: "Product Engineer",
    company: "Growyourcorp",
    period: "2024 — Present",
    type: "Full-time",
    location: "Remote",
    isCurrent: true,
    url: "https://growyourcorp.com/",
  },
  {
    id: "improve-bizz",
    role: "Full Stack Developer",
    company: "Improve Bizz",
    period: "2025 — 2026",
    type: "Contract",
    location: "Remote",
  },
  {
    id: "freelancing",
    role: "Full Stack Engineer",
    company: "Freelance",
    period: "2023 — 2025",
    type: "Independent",
    location: "Remote",
  },
  {
    id: "vardaam",
    role: "Frontend Developer",
    company: "Vardaam Web Solutions",
    period: "2022 — 2023",
    type: "Internship",
    location: "On-site"
  },
];

const Experience = () => {
  // Growyourcorp expanded by default
  const [expandedIds, setExpandedIds] = useState<string[]>(["growyourcorp"]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border dark-border w-full box-border featured-shadow bg-gradient-to-b from-[#181818]/90 via-[#121212]/95 to-[#0b0b0b] p-5 sm:p-8 lg:p-10">
      <HorizontalBorder />

      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
            Experience
          </h3>
        </div>
      </div>

      {/* Experience list */}
      <div className="divide-y divide-white/[0.07]">
        {experiences.map((exp) => {

          return (
            <div
              key={exp.id}
              className="group py-7 sm:py-8 transition-colors duration-200"
            >
              {/* Item Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h4 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
                      {exp.role}
                    </h4>

                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Present
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-white transition-colors group/link underline-offset-4 hover:underline"
                      >
                        <span>{exp.company}</span>
                        <FiArrowUpRight className="size-4 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                    {exp.location && (
                      <>
                        <span className="text-white/20">•</span>
                        <span className="text-white/40 text-xs sm:text-sm">
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Period pill */}
                <div className="self-start sm:self-auto">
                  <span className="font-mono text-xs sm:text-sm text-white bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
