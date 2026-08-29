import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  Info,
  SlidersHorizontal,
  Code2,
  Workflow,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories: ProjectCategory[] = [
    'All',
    'Full-Stack',
    'AI/ML',
    'Computer Vision',
    'E-Commerce',
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategory.includes(activeFilter as any);
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span className="tracking-wider">PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-xl">
              Real-world systems spanning recommendation engines, threat detection algorithms, automated computer vision pipelines, and full-stack web platforms.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
          </div>

          {/* Filter Tabs */}
          <div
            id="projects-filter-bar"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#171717] border border-white/5 shadow-lg"
            role="tablist"
            aria-label="Project Categories"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-white text-black shadow-md'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-3xl bg-[#171717] border border-white/5 overflow-hidden hover:border-[#0EA5E9]/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group hover:-translate-y-1.5"
            >
              {/* Card Header & Visual Thumbnail Representation */}
              <div>
                {/* Project Visual Container */}
                <div className="relative h-48 w-full bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0d0d0d] p-5 flex flex-col justify-between border-b border-white/5 overflow-hidden">
                  {/* Subtle Background Geometry */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0EA5E9]/10 rounded-full blur-2xl group-hover:bg-[#0EA5E9]/20 transition-all duration-500" />

                  {/* Top Badges */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#262626] border border-white/5 text-[11px] font-mono text-[#0EA5E9]">
                      {project.category.split('/')[0].trim()}
                    </span>
                    {project.statusBadge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40 text-[10px] font-medium text-indigo-300">
                        {project.statusBadge}
                      </span>
                    )}
                  </div>

                  {/* Visual Center Art */}
                  <div className="flex flex-col items-center justify-center my-auto text-center space-y-1 z-10">
                    <div className="p-3 rounded-2xl bg-[#262626] border border-white/5 shadow-lg text-[#0EA5E9] group-hover:scale-110 transition-transform duration-300">
                      {project.category.includes('Vision') ? (
                        <Workflow className="w-6 h-6" />
                      ) : project.category.includes('AI') ? (
                        <Layers className="w-6 h-6" />
                      ) : (
                        <Code2 className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#CBD5E1]">
                      {project.title}
                    </span>
                  </div>

                  {/* Bottom Strip */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] z-10">
                    <span>{project.technologies.slice(0, 3).join(' • ')}</span>
                    <span className="text-[#0EA5E9] group-hover:underline flex items-center gap-1">
                      Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#0EA5E9] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-semibold text-[#0EA5E9] font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-[#94A3B8] text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block font-bold">
                      Key Highlights
                    </span>
                    <ul className="space-y-1 text-xs text-[#CBD5E1]">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5 line-clamp-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] shrink-0 mt-1.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#262626] border border-white/5 text-[11px] font-mono text-[#CBD5E1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-2.5">
                {/* Details Modal Trigger */}
                <button
                  id={`project-details-btn-${project.id}`}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>Architecture</span>
                </button>

                {/* GitHub Repository Link (if available) */}
                {project.githubUrl ? (
                  <a
                    id={`project-github-btn-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/5 text-[#CBD5E1] hover:text-white transition-all flex items-center justify-center"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                ) : null}

                {/* Live Demo Link */}
                {project.liveDemoUrl && (
                  <a
                    id={`project-live-btn-${project.id}`}
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#6366F1]/20 border border-[#6366F1]/40 text-indigo-300 hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
