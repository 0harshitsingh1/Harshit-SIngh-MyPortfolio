"use client";

import { motion } from "framer-motion";

export default function ProjectsSection({ id }: { id?: string }) {
  return (
    <section id={id || "projects"} className="min-h-[calc(100vh-64px)] flex items-center justify-center py-20 relative overflow-hidden bg-[#050508]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight"
        >
          Projects
        </motion.h2>
        <div className="w-24 h-1.5 bg-[#e35d5b] rounded-full mx-auto mb-16" />
        <p className="text-xl text-gray-400">Projects content coming soon...</p>
      </div>
    </section>
  );
}
