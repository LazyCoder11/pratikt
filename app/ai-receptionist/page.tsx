import React from "react";
import { Metadata } from "next";
import { HeroSection } from "./_components/HeroSection";
import { ProblemSection } from "./_components/ProblemSection";
import { SolutionSection } from "./_components/SolutionSection";
import { ExperienceSection } from "./_components/ExperienceSection";
import { HowItWorksSection } from "./_components/HowItWorksSection";
import { NicheSpecialization } from "./_components/NicheSpecialization";
import { MultilingualSection } from "./_components/MultilingualSection";
import { LeadQualification } from "./_components/LeadQualification";
import { AfterCallSection } from "./_components/AfterCallSection";
import { ConversationTranscript } from "./_components/ConversationTranscript";
import { ComparisonSection } from "./_components/ComparisonSection";
import { CustomizationSection } from "./_components/CustomizationSection";
import { CaseStudySection } from "./_components/CaseStudySection";
import { FinalCtaSection } from "./_components/FinalCtaSection";
import { ReceptionistFooter } from "./_components/ReceptionistFooter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Receptionist for Overseas Education Consultancies — Pratik",
  description:
    "An AI voice receptionist built specifically for overseas education and visa consultancies. Speaks naturally in Gujarati, Hindi and English, qualifies student enquiries and captures context 24/7.",
  openGraph: {
    title: "AI Receptionist for Overseas Education Consultancies",
    description:
      "An AI voice receptionist built specifically for overseas education and visa consultancies in India. Built and deployed by Pratik.",
    url: "https://pratikt.in/ai-receptionist",
    siteName: "Pratik Trivedi",
    locale: "en_US",
    type: "website",
  },
};

export default function AiReceptionistPage() {
  return (
    <main className="min-h-screen bg-[#101010] text-[#f2f2f2] selection:bg-white selection:text-black overflow-x-hidden">
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — THE PROBLEM */}
      <ProblemSection />

      {/* SECTION 3 — THE SOLUTION */}
      <SolutionSection />

      {/* SECTION 4 — SHOW THE EXPERIENCE */}
      <ExperienceSection />

      {/* SECTION 5 — HOW IT WORKS */}
      <HowItWorksSection />

      {/* SECTION 6 — BUILT FOR STUDY ABROAD CONSULTANCIES */}
      {/* <NicheSpecialization /> */}

      {/* SECTION 7 — MULTILINGUAL */}
      <MultilingualSection />

      {/* SECTION 8 — LEAD QUALIFICATION */}
      {/* <LeadQualification /> */}

      {/* SECTION 9 — AFTER THE CALL */}
      {/* <AfterCallSection /> */}

      {/* SECTION 10 — REAL USE CASE */}
      {/* <ConversationTranscript /> */}

      {/* SECTION 11 — WHY THIS IS DIFFERENT */}
      <ComparisonSection />

      {/* SECTION 12 — IMPLEMENTATION */}
      <CustomizationSection />

      {/* SECTION 13 — CASE STUDY / EARLY IMPLEMENTATION */}
      <CaseStudySection />

      {/* SECTION 14 — FINAL CTA */}
      <FinalCtaSection />

      {/* SECTION 15 — FOOTER */}
      <Footer />
    </main>
  );
}
