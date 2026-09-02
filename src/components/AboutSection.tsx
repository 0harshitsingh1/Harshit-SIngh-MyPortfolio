"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection({ id }: { id?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id={id || "about"} className="min-h-[calc(100vh-64px)] flex items-center justify-center py-20 overflow-hidden relative">

      {/* Faint Background element to keep it tied to the overall design */}
      <div className="absolute -left-[20%] top-[20%] w-[500px] h-[500px] rounded-full bg-[#e35d5b]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">

          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start z-10"
          >
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
                About Me
              </h1>
              <div className="w-20 h-1.5 bg-[#e35d5b] rounded-full" />
            </div>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
              Hi, I&apos;m Harshit Singh, a Java Developer passionate about building scalable, efficient, and maintainable applications. My expertise includes Core Java, Object-Oriented Programming, and Data Structures & Algorithms, with a strong focus on writing clean and reliable code.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              Currently, I&apos;m expanding into full-stack development with Spring Boot, React, and SQL. Beyond coding, I enjoy simplifying technical concepts through writing and continuously learning new technologies. I&apos;m driven by collaboration, problem-solving, and building impactful solutions for real-world challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-3 inline-block"
                >
                  LinkedIn
                </motion.div>
              </Link>
              <Link href="/contact" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(227, 93, 91, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-3 inline-block"
                >
                  Get in touch
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative mt-12 lg:mt-0"
          >
            {/* Glowing Backdrop behind the image */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#e35d5b] blur-[80px] opacity-30"
            />

            {/* 3D Tilt Container */}
            <motion.div
              style={{ rotateX, rotateY, perspective: 1000, zIndex: 10 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full"
            >
              {/* Up-Down Floating Animation */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full rounded-full p-2 border-2 border-white/5"
              >
                <div className="w-full h-full rounded-full border-4 border-[#e35d5b]/50 shadow-[0_0_60px_rgba(227,93,91,0.4)] bg-[#0a0a0f] overflow-hidden relative flex flex-col items-center justify-center group cursor-pointer transition-colors hover:border-[#e35d5b]">
                  <Image
                    src="/harshit-profile.jpg"
                    alt="Harshit Singh"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
