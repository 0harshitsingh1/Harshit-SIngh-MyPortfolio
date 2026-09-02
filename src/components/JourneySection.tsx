"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, CheckCircle } from "lucide-react";
import { educationData } from "@/lib/education";

export default function JourneySection({ id }: { id?: string }) {
  return (
    <section
      id={id || "journey"}
      className="min-h-[calc(100vh-64px)] py-20 relative overflow-hidden bg-[#050508]"
    >
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-[#e35d5b]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-[#9333ea]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f59e0b]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e35d5b]/10 border border-[#e35d5b]/20 text-[#e35d5b] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-[#e35d5b] rounded-full mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-2xl text-base sm:text-lg"
          >
            The educational path and key foundations that paved the way for my passion in software engineering and problem solving.
          </motion.p>
        </div>

        {/* Interactive Animated Timeline */}
        <div className="relative">
          {/* Central Vertical Glowing Line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#e35d5b] via-[#f59e0b] to-[#9333ea] opacity-40 shadow-[0_0_15px_rgba(227,93,91,0.5)]" />

          {/* Left Vertical Line for Mobile/Tablet */}
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#e35d5b] via-[#f59e0b] to-[#9333ea] opacity-30" />

          <div className="space-y-12 lg:space-y-16">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge Node (Center on Desktop, Left on Mobile) */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="absolute left-6 -translate-x-1/2 lg:left-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0e0e17] border-2 border-[#e35d5b] shadow-[0_0_25px_rgba(227,93,91,0.4)] group"
                  >
                    <GraduationCap className="w-5 h-5 text-[#e35d5b] group-hover:scale-110 transition-transform" />
                  </motion.div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    whileHover={{ scale: 1.03, y: -8 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-full lg:w-[calc(50%-48px)] pl-16 lg:pl-0 ${
                      isEven ? "lg:text-left" : "lg:text-left"
                    }`}
                  >
                    <div className="group relative rounded-2xl bg-[#0e0e17]/90 border border-white/10 hover:border-transparent backdrop-blur-xl p-5 sm:p-6 transition-all duration-500 hover:shadow-[0_10px_50px_rgba(227,93,91,0.25)] overflow-hidden z-10">
                      
                      {/* Animated Gradient Border (visible on hover) */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-[#e35d5b]/50 via-[#f59e0b]/50 to-[#9333ea]/50 -z-20 blur-[10px]" />
                      <div className="absolute inset-[1px] rounded-2xl bg-[#0e0e17] -z-10" />

                      {/* Ambient Card Corner Glow */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#e35d5b]/15 to-transparent rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-150 group-hover:opacity-100 opacity-60 -z-10" />
                      
                      {/* Stage Tag & Academic Score Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#e35d5b]/10 text-[#e35d5b] border border-[#e35d5b]/20">
                          <BookOpen className="w-3.5 h-3.5" />
                          {item.stage}
                        </span>

                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#e35d5b]/20 to-[#f59e0b]/20 text-white border border-white/10 shadow-inner">
                          <Award className="w-4 h-4 text-[#f59e0b]" />
                          <span>
                            {item.scoreType}: <span className="text-[#f59e0b] font-mono">{item.score}</span>
                          </span>
                        </div>
                      </div>

                      {/* Degree / Certificate Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#e35d5b] transition-colors leading-snug mb-2">
                        {item.degree}
                      </h3>

                      {/* Institution Name */}
                      <h4 className="text-base sm:text-lg font-medium text-gray-300 mb-4">
                        {item.institution}
                      </h4>

                      {/* Meta Info: Duration & Location */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-gray-400 mb-4 pb-4 border-b border-white/5">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#e35d5b]" />
                          <span>{item.duration}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span>{item.location}</span>
                          </div>
                        )}
                        {item.field && (
                          <div className="text-gray-400">
                            <span className="text-gray-500">Stream: </span>
                            <span className="text-gray-300 font-medium">{item.field}</span>
                          </div>
                        )}
                      </div>

                      {/* Key Highlights / Description */}
                      {item.description && item.description.length > 0 && (
                        <ul className="space-y-2 mb-4 text-xs sm:text-sm text-gray-300">
                          {item.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                              <CheckCircle className="w-4 h-4 text-[#e35d5b] shrink-0 mt-0.5" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Relevant Skills Tags */}
                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-white/20 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </motion.div>

                  {/* Empty Spacer on Desktop for opposite side alignment */}
                  <div className="hidden lg:block lg:w-[calc(50%-48px)]" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
