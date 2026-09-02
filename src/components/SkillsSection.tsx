"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/skills";
import { Code2, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Helper to group skills into 3 orbits
const orbit1Skills = skillsData.slice(0, 3);
const orbit2Skills = skillsData.slice(3, 7);
const orbit3Skills = skillsData.slice(7, 11);

export default function SkillsSection({ id }: { id?: string }) {
  // Mobile scaling detection for the orbit container
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScale(0.5);
      else if (window.innerWidth < 1024) setScale(0.8);
      else setScale(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerHeight = scale === 0.5 ? 320 : scale === 0.8 ? 500 : 600;

  return (
    <section 
      id={id || "skills"} 
      className="min-h-screen py-24 relative overflow-hidden bg-[#050508] flex flex-col items-center justify-center"
    >
      {/* Intense Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#e35d5b]/10 via-[#9333ea]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full max-w-[1200px] px-4 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e35d5b]/10 border border-[#e35d5b]/20 text-[#e35d5b] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Tech Ecosystem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Skill <span className="text-gradient">Orbit</span>
          </motion.h2>
        </div>

        {/* Orbit Visualization Container */}
        <div 
          className="relative flex items-center justify-center w-full mt-4 transition-all duration-500" 
          style={{ height: `${containerHeight}px` }}
        >
          
          <div 
            className="relative flex items-center justify-center origin-center transition-transform duration-500 ease-out"
            style={{ transform: `scale(${scale})` }}
          >
            
            {/* Center Node */}
            <div className="absolute z-50 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#e35d5b] to-[#f59e0b] shadow-[0_0_50px_rgba(227,93,91,0.6)] border-4 border-[#050508]">
              <Code2 className="w-8 h-8 text-white" />
            </div>

            {/* ORBIT 1 (Inner) */}
            <OrbitRing radius={120} duration={25} reverse={false} skills={orbit1Skills} />
            
            {/* ORBIT 2 (Middle) */}
            <OrbitRing radius={210} duration={35} reverse={true} skills={orbit2Skills} />
            
            {/* ORBIT 3 (Outer) */}
            <OrbitRing radius={300} duration={45} reverse={false} skills={orbit3Skills} />

          </div>
        </div>

      </div>
    </section>
  );
}

function OrbitRing({ radius, duration, reverse, skills }: { radius: number; duration: number; reverse: boolean; skills: any[] }) {
  return (
    <div 
      className="absolute flex items-center justify-center rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {/* Animated Ring Rotation */}
      <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full rounded-full pointer-events-none"
      >
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 360;
          
          return (
            <div
              key={skill.name}
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
              }}
            >
              {/* Counter-rotate the inner element so it stays upright! */}
              <motion.div
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="group flex flex-col items-center justify-center w-[85px] h-[85px] rounded-full bg-[#0e0e17]/80 border border-white/10 backdrop-blur-md hover:bg-[#e35d5b]/20 hover:border-[#e35d5b]/50 hover:scale-[1.35] hover:z-50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer pointer-events-auto">
                  
                  {/* Default State: Skill Name */}
                  <span className="text-xs font-bold text-gray-300 text-center absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300 px-1 drop-shadow-md">
                    {skill.name}
                  </span>

                  {/* Hover State: Big Percentage */}
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e35d5b] to-[#f59e0b] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">
                    {skill.level}%
                  </span>
                  
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
