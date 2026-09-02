"use client";

import { motion, Variants, useInView, animate } from "framer-motion";
import { skillsData, Skill } from "@/lib/skills";
import { useEffect, useRef, useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const barVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SkillsSection({ id }: { id?: string }) {
  return (
    <section 
      id={id || "skills"} 
      className="min-h-[calc(100vh-64px)] flex items-center py-20 relative overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e35d5b]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
                My Skills
              </h2>
              <div className="w-20 h-1.5 bg-[#e35d5b] rounded-full" />
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I have a strong foundation in both frontend and backend development, with experience in building responsive user interfaces and developing reliable, scalable backend applications. I am passionate about writing clean, maintainable code and continuously expanding my knowledge by learning new technologies, improving my problem-solving skills, and taking on new challenges.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Skill Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6"
          >
            {skillsData.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, skill.level, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => setCount(Math.round(value)),
      });
      return controls.stop;
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div 
      ref={ref}
      variants={barVariants} 
      whileHover={{ scale: 1.03, x: 5 }}
      className="w-full group cursor-default"
    >
      <div className="flex justify-between items-end mb-3 transition-colors duration-300 group-hover:text-[#e35d5b]">
        <span className="text-white text-lg font-medium group-hover:text-white transition-colors">{skill.name}</span>
        <span className="text-[#e35d5b] font-bold group-hover:text-white transition-colors">{count}%</span>
      </div>
      {/* Track */}
      <div className="h-4 w-full bg-[#1a1a24] rounded-full overflow-hidden relative border border-white/5 shadow-inner transition-all duration-300 group-hover:bg-[#20202e] group-hover:border-[#e35d5b]/30 group-hover:shadow-[0_0_15px_rgba(227,93,91,0.2)]">
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
          className="h-full bg-gradient-to-r from-[#e35d5b] via-[#ff7a78] to-[#e35d5b] rounded-full relative bg-[length:200%_auto] animate-gradient-flow"
        >
          {/* Leading edge glow indicator */}
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.6)] animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}
