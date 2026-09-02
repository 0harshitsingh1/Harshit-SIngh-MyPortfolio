"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, X, Code2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
import { projectsData, Project } from "@/lib/projects";
import Image from "next/image";

function TiltCard({ children, onClick, index, onMouseEnter, onMouseLeave, isBlurred }: { children: React.ReactNode; onClick: () => void; index: number; onMouseEnter: () => void; onMouseLeave: () => void; isBlurred: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onMouseLeave();
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`glass-card flex flex-col cursor-pointer group transition-all duration-300 hover:border-[#e35d5b]/50 hover:shadow-[0_0_30px_rgba(227,93,91,0.15)] z-10 ${isBlurred ? "blur-[2px] opacity-70 scale-[0.99] !z-0" : ""}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ id }: { id?: string }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section 
      id={id || "projects"} 
      className="min-h-[calc(100vh-64px)] py-20 relative overflow-hidden bg-[#050508]"
    >
      {/* Background Motifs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9333ea]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
            Projects
          </h2>
          <div className="w-20 h-1.5 bg-[#e35d5b] rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <TiltCard
              key={project.id}
              index={index}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              isBlurred={hoveredIndex !== null && hoveredIndex !== index}
            >
              {/* Thumbnail Area */}
              <div className="w-full h-48 bg-[#0a0a0f] rounded-lg mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                />
              </div>

              {/* Content */}
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#e35d5b] transition-colors">
                  {project.title}
                </h3>
                <span className={`shrink-0 px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border ${project.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 group-hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/10">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#050508]/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Header / Banner */}
              <div className="w-full h-48 sm:h-64 bg-[#12121c] relative flex items-center justify-center flex-shrink-0">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-[#e35d5b] text-white rounded-full backdrop-blur-md transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>
                <Image src={selectedProject.imageUrl} alt={selectedProject.title} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
              </div>

              {/* Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow custom-scrollbar">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <span className={`w-fit shrink-0 px-3 py-1 text-xs uppercase tracking-wider font-semibold rounded-full border ${selectedProject.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"}`}>
                    {selectedProject.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-sm font-medium bg-[#e35d5b]/10 text-[#e35d5b] rounded-full border border-[#e35d5b]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-gray-300 text-base leading-relaxed mb-10 whitespace-pre-wrap">
                  {selectedProject.fullDescription}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 font-medium transition-all active:scale-95"
                  >
                    <GithubIcon className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </a>

                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#e35d5b] hover:bg-[#d44d4b] text-white px-6 py-3 font-medium transition-all active:scale-95 shadow-[0_0_20px_rgba(227,93,91,0.3)] hover:shadow-[0_0_25px_rgba(227,93,91,0.5)]"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
