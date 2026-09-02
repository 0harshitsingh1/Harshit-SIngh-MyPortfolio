"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

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

import Image from "next/image";
import { projectsData, Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold inline-block mb-4">
          Projects
        </h1>
        <div className="h-1 w-24 bg-accent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_rgba(var(--color-accent),0.2)] transition-all duration-300"
          >
            {/* Thumbnail Area */}
            <div className="h-48 bg-white/5 w-full relative overflow-hidden flex items-center justify-center">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className={`shrink-0 px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border ${project.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/5">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-full sm:max-h-[90vh] bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto overflow-x-hidden flex-1">
                {/* Modal Header/Image */}
                <div className="h-64 sm:h-80 w-full bg-white/5 relative flex items-center justify-center border-b border-white/10">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>

                <div className="p-6 sm:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                      {selectedProject.title}
                    </h2>
                    <span className={`w-fit shrink-0 px-3 py-1 text-xs uppercase tracking-wider font-semibold rounded-full border ${selectedProject.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="prose prose-invert max-w-none mb-10">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                    {selectedProject.githubUrl ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-white font-medium"
                      >
                        <GithubIcon className="w-5 h-5" />
                        View on GitHub
                      </a>
                    ) : (
                      <button disabled className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-gray-500 font-medium cursor-not-allowed">
                        <GithubIcon className="w-5 h-5 opacity-50" />
                        GitHub (Coming Soon)
                      </button>
                    )}

                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-medium transition-colors shadow-lg shadow-accent/20"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
