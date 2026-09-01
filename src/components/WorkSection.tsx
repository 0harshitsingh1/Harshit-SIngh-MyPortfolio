"use client";

import { motion, Variants } from "framer-motion";
import { GitBranch, Code2, Terminal } from "lucide-react";
import Link from "next/link";

const workProfiles = [
  {
    name: "GitHub",
    icon: <GitBranch className="w-16 h-16 mb-4 text-[#e35d5b] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" />,
    url: "https://github.com/YOUR_USERNAME",
  },
  {
    name: "LeetCode",
    icon: <Code2 className="w-16 h-16 mb-4 text-[#e35d5b] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" />,
    url: "https://leetcode.com/YOUR_USERNAME",
  },
  {
    name: "GeeksforGeeks",
    icon: <Terminal className="w-16 h-16 mb-4 text-[#e35d5b] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" />,
    url: "https://www.geeksforgeeks.org/user/YOUR_USERNAME",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WorkSection({ id }: { id?: string }) {
  return (
    <section id={id || "work"} className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-20 overflow-hidden relative">
      
      {/* Background Motifs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#e35d5b]/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[20%] h-[600px] w-[600px] rounded-full bg-[#f59e0b]/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            My Work
          </h1>
          <div className="w-24 h-1.5 bg-[#e35d5b] rounded-full" />
        </motion.div>

        {/* Profiles Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {workProfiles.map((profile) => (
            <motion.div key={profile.name} variants={itemVariants}>
              <Link href={profile.url} target="_blank" rel="noopener noreferrer" className="block outline-none group h-full">
                <div className="glass-card flex flex-col items-center justify-center py-14 px-8 h-full transition-all duration-300 hover:-translate-y-2 hover:border-[#e35d5b]/50 hover:shadow-[0_0_30px_rgba(227,93,91,0.2)] hover:bg-white/10 relative overflow-hidden">
                  
                  {/* Subtle hover background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e35d5b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {profile.icon}
                    <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
                    <span className="text-sm text-gray-500 group-hover:text-[#e35d5b] transition-colors duration-300 tracking-wide uppercase font-medium">
                      click me &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
