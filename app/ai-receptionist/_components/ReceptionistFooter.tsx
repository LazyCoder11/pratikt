"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";

export const ReceptionistFooter = () => {
  return (
    <footer className="w-full border-t border-[#2e2e2e] px-6 sm:px-12 lg:px-24 py-12 lg:py-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left branding */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              width={28}
              height={24}
              alt="Pratik Trivedi"
            />
            <span className="text-xl font-normal text-white tracking-wide">
              Pratik
            </span>
          </div>
          <p className="text-sm text-[#f2f2f280] font-light">
            AI Receptionist for Overseas Education Consultancies
          </p>
          <span className="text-xs font-mono text-[#f2f2f240]">
            pratikt.in/ai-receptionist
          </span>
        </div>

        {/* Right contact links & copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-10 text-sm text-[#f2f2f280]">
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/info"
            className="hover:text-white transition-colors"
          >
            Info
          </Link>
          <a
            href="https://www.linkedin.com/in/pratik-trivedi-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            LinkedIn <RxArrowTopRight className="text-xs" />
          </a>
          <a
            href="https://www.instagram.com/pratiktriveedi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            Instagram <RxArrowTopRight className="text-xs" />
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#f2f2f240]">
        <span>
          © {new Date().getFullYear()} Pratik Trivedi. All rights reserved.
        </span>
        <span>Overseas Education AI Voice Infrastructure</span>
      </div>
    </footer>
  );
};
