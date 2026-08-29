import React from 'react';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#171717] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#262626] border border-white/5 text-[#94A3B8] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#262626] border border-white/5 text-[#0EA5E9] text-xs font-mono">
              {project.category}
            </span>
            {project.statusBadge && (
              <span className="px-2.5 py-1 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40 text-indigo-300 text-xs font-medium font-mono">
                {project.statusBadge}
              </span>
            )}
          </div>
          <h2
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-sm font-semibold text-[#0EA5E9] font-mono">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed bg-[#262626] p-4 rounded-2xl border border-white/5">
          {project.description}
        </p>

        {/* Specific Workflow Diagram for AI/Vision Projects */}
        {project.workflow && (
          <div className="space-y-3 p-4 rounded-2xl bg-[#262626] border border-white/5">
            <div className="flex items-center gap-2 text-[#0EA5E9] font-bold text-xs uppercase tracking-wider font-mono">
              <Workflow className="w-4 h-4" />
              <span>Execution Pipeline Workflow</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
              {project.workflow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2.5 py-1 rounded-lg bg-[#171717] border border-white/5 text-[#CBD5E1] font-medium font-mono">
                    {step}
                  </span>
                  {idx < (project.workflow?.length || 0) - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* 5-Stage Recommendation Pipeline if present (Veyrivo) */}
        {project.pipeline && (
          <div className="space-y-3 p-4 rounded-2xl bg-[#262626] border border-white/5">
            <div className="flex items-center gap-2 text-[#0EA5E9] font-bold text-xs uppercase tracking-wider font-mono">
              <Layers className="w-4 h-4" />
              <span>Hybrid 5-Stage Recommendation Pipeline</span>
            </div>
            <div className="space-y-2 text-xs text-[#CBD5E1]">
              {project.pipeline.map((stage, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#171717] p-3 rounded-xl border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-[#262626] text-[#0EA5E9] border border-white/10 font-mono text-[10px] flex items-center justify-center shrink-0 font-bold">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Threat Detection Matrix if present */}
        {project.threatDetection && (
          <div className="space-y-3 p-4 rounded-2xl bg-[#262626] border border-red-500/20">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider font-mono">
              <ShieldAlert className="w-4 h-4" />
              <span>Threat Detection Capabilities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.threatDetection.map((threat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#171717] border border-white/5 text-[#CBD5E1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>{threat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture & AI Capabilities Grid if present */}
        {project.architecture && (
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] font-mono">
              Architecture & Ingress
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-[#262626] border border-white/5 text-[#CBD5E1]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics & Metrics if present */}
        {project.analytics && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider font-mono">
              <BarChart3 className="w-4 h-4" />
              <span>Ranking Evaluation & Analytics Metrics</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.analytics.map((metric, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-[#6366F1]/20 border border-[#6366F1]/30 text-indigo-200 font-mono">
                  {metric}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider font-bold">
            Technologies & Tools
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#262626] border border-white/5 text-[#CBD5E1] text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
          {project.githubUrl ? (
            <a
              id={`modal-github-link-${project.id}`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-colors font-mono"
            >
              <Github className="w-4 h-4" />
              <span>View Repository on GitHub</span>
            </a>
          ) : (
            <span className="text-xs text-[#64748B] font-mono italic">
              Repository is private / offline archival
            </span>
          )}

          <button
            id="modal-dismiss-btn"
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-bold transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
