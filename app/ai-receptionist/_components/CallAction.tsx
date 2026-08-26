"use client";

import React, { useState } from "react";
import { FiPhoneCall, FiCopy, FiCheck } from "react-icons/fi";

interface CallActionProps {
  phoneNumber?: string;
  size?: "default" | "large";
  showLabel?: boolean;
}

export const CallAction: React.FC<CallActionProps> = ({
  phoneNumber = "+91 XXXXX XXXXX",
  size = "default",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isLarge = size === "large";

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl">
      <a
        href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
        className={`group relative inline-flex items-center justify-center gap-3 text-white font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-[#f2f2f20d] active:scale-[0.98] ${isLarge
          ? "px-8 py-4 text-base md:text-lg"
          : "px-6 py-3.5 text-sm md:text-base"
          }`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffffff]"></span>
        </span>
        {/* <FiPhoneCall className="text-base group-hover:rotate-12 transition-transform duration-300" /> */}
        <span>Call the AI Receptionist</span>
      </a>

      <button
        onClick={handleCopy}
        type="button"
        className={`inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full border border-[#f2f2f220] bg-[#f2f2f20a] hover:bg-[#f2f2f215] text-[#f2f2f2] text-sm md:text-base font-mono tracking-wider transition-all duration-300 active:scale-[0.98] ${isLarge ? "py-4 px-6 text-base" : ""
          }`}
        title="Copy phone number"
      >
        <span>{phoneNumber}</span>
        {copied ? (
          <span className="flex items-center gap-1 text-xs text-white uppercase tracking-wider font-sans font-medium">
            <FiCheck className="text-white text-sm" /> Copied
          </span>
        ) : (
          <FiCopy className="text-[#f2f2f280] text-sm" />
        )}
      </button>
    </div>
  );
};
