"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgArrowTopRight } from "react-icons/cg";
import gsap from "gsap";
import TopNotificationBar from "./TopNotificationBar";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("work");

  useEffect(() => {
    if (pathname === "/info") {
      setActiveTab("info");
    } else if (pathname === "/ai-receptionist") {
      setActiveTab("ai-receptionist");
    } else {
      setActiveTab("work");
    }
  }, [pathname]);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;
    const contact = contactRef.current;

    gsap.set([logo, links, contact], { y: -50, opacity: 0 });

    gsap.to(navbar, { opacity: 1, duration: 0.5, delay: 0.2 });

    gsap.to([logo, links, contact], {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const links = linksRef.current?.querySelectorAll("a");

    if (links && indicator) {
      const activeIndex =
        activeTab === "work" ? 0 : activeTab === "info" ? 1 : 2;
      const targetLink = links[activeIndex];

      if (targetLink) {
        // Move the indicator to the active link
        const targetBounds = targetLink.getBoundingClientRect();
        const parentBounds = linksRef.current?.getBoundingClientRect();
        if (parentBounds) {
          const offset =
            targetBounds.left -
            parentBounds.left +
            targetBounds.width / 2 -
            20;

          gsap.to(indicator, {
            x: offset,
            duration: 0.5,
            ease: "power3.out",
          });
        }
      }
    }
  }, [activeTab]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
      <TopNotificationBar />
      <div
        ref={navbarRef}
        className="navbar color flex items-center w-full h-[70px] sm:h-[85px] md:h-[105px] bg-gradient-to-b from-[#000000e6] via-[#00000080] to-transparent"
      >
        <div className="flex justify-between items-center px-3 sm:px-6 md:px-10 w-full">
          <Link href="/" ref={logoRef} className="flex gap-3 md:gap-5 items-center shrink-0">
            <Image
              src="/images/logo.png"
              width={28}
              height={23}
              alt="Pratik Trivedi"
              className="w-7 h-auto md:w-[30px]"
            />
            <div className="md:flex flex-col hidden">
              <h4 className="color text-lg tracking-wider font-normal">
                Pratik Trivedi
              </h4>
              <p className="tracking-wide text-[#f2f2f27e] text-base">
                Software Engineer
              </p>
            </div>
          </Link>
          <div
            ref={linksRef}
            className="relative flex h-9 sm:h-10 items-center py-1 sm:py-5 px-1 sm:px-2 justify-between gap-0.5 sm:gap-2 rounded-full backdrop-blur-3xl nav-pill-shadow border border-[#f2f2f20d] bg-[#f2f2f20d]"
          >
            <div
              ref={indicatorRef}
              className="absolute top-0 left-0 h-1 -z-50 w-[30px] sm:w-[40px] bg-[#f2f2f2] nav-indicator-glow rounded-full"
              style={{ transform: "translateX(0)" }}
            ></div>
            <Link
              href="/"
              onClick={() => setActiveTab("work")}
              className={`px-2.5 sm:px-4 md:px-5 py-1 text-xs sm:text-sm md:text-base rounded-full transition-colors ${activeTab === "work" ? "text-white font-medium" : "text-white/70 hover:text-white"
                }`}
            >
              Work
            </Link>
            <Link
              href="/info"
              onClick={() => setActiveTab("info")}
              className={`px-2.5 sm:px-4 md:px-5 py-1 text-xs sm:text-sm md:text-base rounded-full transition-colors ${activeTab === "info" ? "text-white font-medium" : "text-white/70 hover:text-white"
                }`}
            >
              Info
            </Link>
            <Link
              href="/ai-receptionist"
              onClick={() => setActiveTab("ai-receptionist")}
              className={`px-2.5 sm:px-4 md:px-5 py-1 text-xs sm:text-sm md:text-base rounded-full transition-colors whitespace-nowrap ${activeTab === "ai-receptionist" ? "text-white font-medium" : "text-white/70 hover:text-white"
                }`}
            >
              AI Receptionist
            </Link>
          </div>
          <div ref={contactRef} className="md:flex hidden items-center">
            <a
              href="https://www.instagram.com/pratiktriveedi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#f2f2f20d] px-5 py-2 rounded-full text-base lg:text-lg flex items-center gap-2 transition-all"
            >
              Instagram <CgArrowTopRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
