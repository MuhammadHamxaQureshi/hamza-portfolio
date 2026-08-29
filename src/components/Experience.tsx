import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const scrollToProject = (e: React.MouseEvent<HTMLAnchorElement>, projectId: string) => {
    e.preventDefault();
    const elem = document.getElementById(`project-card-${projectId}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      elem.classList.add('ring-2', 'ring-cyan-400');
      setTimeout(() => elem.classList.remove('ring-2', 'ring-cyan-400'), 2500);
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="tracking-wider">CAREER TRACK & INDUSTRY ROLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl">
            Practical development roles delivering production AI engines and responsive web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#262626] ml-4 sm:ml-8 space-y-12 pb-4">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#171717] border-2 border-[#0EA5E9] flex items-center justify-center text-[#0EA5E9] group-hover:scale-110 group-hover:bg-[#262626] transition-transform shadow-md shadow-[#0EA5E9]/20">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div
                id={`exp-card-${idx}`}
                className="rounded-3xl bg-[#171717] border border-white/5 p-6 sm:p-7 hover:border-[#0EA5E9]/40 transition-all duration-300 shadow-2xl space-y-4"
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-[#0EA5E9] font-semibold font-mono text-sm">
                        @ {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#94A3B8] mt-1 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0EA5E9]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#6366F1]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#262626] border border-white/5 text-[#CBD5E1] text-xs font-semibold font-mono">
                      {exp.type}
                    </span>
                    {exp.status && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {exp.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Direct Project Connection */}
                {exp.relatedProjectId && (
                  <div className="p-3.5 rounded-2xl bg-[#262626] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <Sparkles className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                      <span>Associated with featured deliverable: <strong className="text-white">Veyrivo PersonalizeAI</strong></span>
                    </div>
                    <a
                      id="exp-link-project-veyrivo"
                      href={`#project-card-${exp.relatedProjectId}`}
                      onClick={(e) => scrollToProject(e, exp.relatedProjectId!)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0EA5E9] hover:text-white transition-colors font-mono"
                    >
                      <span>Jump to Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Skills Used */}
                <div className="pt-1 flex flex-wrap gap-2">
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#262626] border border-white/5 text-xs font-mono text-[#CBD5E1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
