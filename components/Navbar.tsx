"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgArrowTopRight } from "react-icons/cg";
import gsap from "gsap";

const Navbar = () => {
    const navbarRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Set the initial active tab based on the current URL
    const currentPath = window.location.pathname;
    if (currentPath === "/info") {
      setActiveTab("info");
    } else {
      setActiveTab("work");
    }
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;
    const contact = contactRef.current;

    gsap.set([logo, links, contact], { y: -50, opacity: 0 });

    gsap.to(navbar, { opacity: 1, duration: 0.5, delay: 2 });

    gsap.to([logo, links, contact], {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      delay: 2,
    });
  }, []);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const links = linksRef.current?.querySelectorAll("a");

    if (links && indicator) {
      const activeIndex = activeTab === "work" ? 0 : 1;
      const targetLink = links[activeIndex];

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
  }, [activeTab]);

  return (
    <div
      ref={navbarRef}
      className="navbar color fixed flex items-center top-0 left-0 w-full z-10 h-[130px] bg-gradient-to-b from-[#000000b3] to-[#10101000]"
    >
      <div className="flex justify-between items-center px-10 my-4 w-full">
        <div ref={logoRef} className="flex gap-5 items-center">
          <Image
            src="/images/logo.png"
            width={30}
            height={25}
            alt="Picture of the author"
          />
          <div className="md:flex flex-col hidden">
            <h4 className="color text-lg tracking-wider font-normal">
              Pratik Trivedi
            </h4>
            <p className="tracking-wide text-[#f2f2f27e] text-base">
              Web Designer
            </p>
          </div>
        </div>
        <div
          ref={linksRef}
          className="relative flex h-10 items-center py-6 px-2 justify-between gap-3 rounded-full backdrop-blur-3xl nav-pill-shadow border border-[#f2f2f20d] bg-[#f2f2f20d]"
        >
          <div
            ref={indicatorRef}
            className="absolute top-0 left-0 h-1 -z-50 w-[40px] bg-[#f2f2f2] nav-indicator-glow rounded-full"
            style={{ transform: "translateX(0)" }}
          ></div>
          <Link
            href="/"
            onClick={() => setActiveTab("work")}
            className={`px-6 py-1 rounded-full ${
              activeTab === "work" ? "text-white" : "text-white/70"
            }`}
          >
            Work
          </Link>
          <Link
            href="/info"
            onClick={() => setActiveTab("info")}
            className={`px-6 py-1 rounded-full ${
              activeTab === "info" ? "text-white" : "text-white/70"
            }`}
          >
            Info
          </Link>
        </div>
        <div ref={contactRef} className="md:flex hidden items-center">
          <a
            href="https://www.linkedin.com/in/pratik-trivedi-dev/"
            target="_blank"
            className="hover:bg-[#f2f2f20d] px-5 py-2 rounded-full text-lg flex items-center gap-2 transition-all"
          >
            LinkedIn <CgArrowTopRight size={20} />
          </a>
          <a
            href="https://www.instagram.com/pratiktriveedi/"
            target="_blank"
            className="hover:bg-[#f2f2f20d] px-5 py-2 rounded-full text-lg flex items-center gap-2 transition-all"
          >
            Instagram <CgArrowTopRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
