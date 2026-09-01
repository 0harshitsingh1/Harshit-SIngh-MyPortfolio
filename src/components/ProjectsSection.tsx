"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Code2 } from "lucide-react";
import { projectsData, Project } from "@/lib/projects";
import Image from "next/image";

export default function ProjectsSection({ id }: { id?: string }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="glass-card flex flex-col cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:border-[#e35d5b]/50 hover:shadow-[0_0_30px_rgba(227,93,91,0.15)]"
            >
              {/* Thumbnail Area */}
              <div className="w-full h-48 bg-[#0a0a0f] rounded-lg mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative">
                {/* Fallback Icon if Image doesn't load/exist */}
                <Code2 className="w-12 h-12 text-white/10 absolute" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#e35d5b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* 
                  Since we don't have actual images yet, I will comment this out to prevent broken images. 
                  Uncomment and add real images when ready.
                */}
                {/* <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                /> */}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e35d5b] transition-colors">
                {project.title}
              </h3>
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
            </motion.div>
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
                <Code2 className="w-20 h-20 text-white/10" />
                
                {/* 
                  Uncomment when images are ready:
                  <Image src={selectedProject.imageUrl} alt={selectedProject.title} fill className="object-cover opacity-60" /> 
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
              </div>

              {/* Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow custom-scrollbar">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                
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
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </a>

                  {selectedProject.liveUrl ? (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#e35d5b] hover:bg-[#d44d4b] text-white px-6 py-3 font-medium transition-all active:scale-95 shadow-[0_0_20px_rgba(227,93,91,0.3)] hover:shadow-[0_0_25px_rgba(227,93,91,0.5)]"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/5 text-gray-500 px-6 py-3 font-medium cursor-not-allowed"
                    >
                      <ExternalLink className="w-5 h-5 opacity-50" />
                      <span>Coming Soon</span>
                    </button>
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
