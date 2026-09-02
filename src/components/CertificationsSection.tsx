"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, Award, CheckCircle2 } from "lucide-react";

const achievementsData = [
  {
    title: "Research Publication",
    icon: BookOpen,
    items: [
      "Authored paper (ISSN: 2320-2882) on reducing cognitive load via digital dashboards (2025)."
    ]
  },
  {
    title: "Hackathons",
    icon: Trophy,
    items: [
      "SIH Internal Hackathon – TJIT (2025)",
      "36-hour Vibe-Coding Hackathon – Polaris School of Technology (2025)"
    ]
  },
  {
    title: "Certifications",
    icon: Award,
    items: [
      "Microsoft AI Fest 2025",
      "Software Engineering Basics",
      "Java Programming Basics",
      "Microsoft GitHub Security",
      "Java Developer Interview Preparation – CodeChef",
      // "JPMorgan Chase & Co. Software Engineering Job Simulation"
    ]
  }
];

export default function CertificationsSection({ id }: { id?: string }) {
  return (
    <section
      id={id || "certifications"}
      className="min-h-[calc(100vh-64px)] flex items-center justify-center py-20 relative overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background Motifs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#e35d5b]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="mb-16 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-white"
          >
            Achievements & Certifications
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#e35d5b] rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="glass-card flex flex-col p-8 transition-all duration-300 hover:border-[#e35d5b]/50 hover:shadow-[0_0_30px_rgba(227,93,91,0.1)] group"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#e35d5b]/10 group-hover:border-[#e35d5b]/30 transition-colors">
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-[#e35d5b] transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Card Items */}
                <ul className="space-y-4 flex-grow">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#e35d5b] shrink-0 mt-0.5 opacity-80" />
                      <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
