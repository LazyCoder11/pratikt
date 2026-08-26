"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiPhoneCall, FiX } from "react-icons/fi";

export const TopNotificationBar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#121212] border-b border-white/[0.08] text-white z-[60] relative overflow-hidden">
      {/* Subtle background sheen */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />

      <div className="px-3 sm:px-60 py-1.5 sm:py-2 flex items-center justify-between gap-2 text-[11px] sm:text-xs md:text-sm">
        {/* Main Banner Content - Clickable Link */}
        <Link
          href="/ai-receptionist"
          className="group flex-1 flex items-center justify-between gap-1.5 sm:gap-2.5 text-center cursor-pointer select-none"
        >
          <div className="gap-2 flex items-center">
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="px-1.5 py-0.5 rounded border border-white/20 bg-white/10 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-white font-medium">
                Launched
              </span>
            </span>

            <span className="text-[#f2f2f2e6] font-light tracking-wide whitespace-nowrap">
              <span className="hidden sm:inline">
                24/7 AI Receptionist for Overseas Education Consultancies
              </span>
              <span className="sm:hidden">
                24/7 AI Receptionist
              </span>
            </span>
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-xs text-white/90 group-hover:text-white shrink-0 ml-1">
            <span className="underline underline-offset-2">
              {pathname === "/ai-receptionist" ? "Call Demo" : "Try Demo"}
            </span>
            <FiArrowRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TopNotificationBar;
