"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Tech Enthusiast", "Developer", "Designer", "Coder", "Problem solver"];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change role every 2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const typeWriterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.04,
      transition: { duration: 2, ease: "easeIn" }
    }
  };

  return (
    <main className="relative flex min-h-[calc(100vh-160px)] flex-col items-start justify-center overflow-hidden py-16">
      {/* Background Motifs & Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Subtle Typing Effect Motif */}
        <motion.div 
          variants={typeWriterVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-[-5%] sm:left-[5%] md:left-[10%] top-[25%] text-[8rem] sm:text-[14rem] font-mono font-bold leading-none select-none text-white overflow-hidden whitespace-nowrap"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="block overflow-hidden border-r-4 border-white/20"
          >
            Hello World!
          </motion.span>
        </motion.div>

        {/* Reactive Gradient Blobs */}
        <motion.div
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", damping: 15, stiffness: 50 }}
          className="absolute w-full h-full"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[20%] h-[600px] w-[600px] rounded-full bg-[#e35d5b]/20 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-[#f59e0b]/20 blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[30%] h-[700px] w-[700px] rounded-full bg-[#9333ea]/20 blur-[150px]"
          />
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start justify-center max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xl sm:text-2xl text-[#e35d5b] font-semibold tracking-wide"
          >
            Hello, I&apos;m
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem] leading-[1.1]"
          >
            Harshit Singh
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 tracking-tight flex flex-wrap gap-2 items-center"
          >
            <span>And I&apos;m a</span>
            <span className="text-gradient inline-flex min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(227, 93, 91, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Contact Me
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-gray-500"
      >
        <span className="mb-2 text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </main>
  );
}
