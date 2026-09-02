"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import JourneySection from "@/components/JourneySection";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#050508] text-white selection:bg-[#e35d5b] selection:text-white pt-10 pb-20">
      
      {/* Top Navigation Bar */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#e35d5b]/40 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#e35d5b]" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#e35d5b]" />
            <span>Harshit Singh &bull; Education</span>
          </div>
        </div>
      </div>

      {/* Render the core Journey Component */}
      <JourneySection />

      {/* Footer Return Prompt */}
      <div className="text-center mt-12">
        <Link
          href="/#contact"
          className="btn-primary inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
        >
          <span>Get in Touch</span>
          &rarr;
        </Link>
      </div>
    </main>
  );
}
