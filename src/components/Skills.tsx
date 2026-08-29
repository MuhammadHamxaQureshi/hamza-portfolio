import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  Sparkles,
  Check,
  Terminal,
  Cpu,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Frontend':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'APIs & Tools':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Data & AI':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wider">TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive, categorized overview of languages, frameworks, databases, and intelligent tools I use to build scalable systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              id={`skill-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="rounded-3xl bg-[#171717] border border-white/5 p-6 hover:border-[#0EA5E9]/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Category Card Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#262626] border border-white/5 group-hover:scale-105 transition-transform duration-200">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#0EA5E9] transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="px-3 py-1.5 rounded-xl bg-[#262626] border border-white/5 hover:border-[#0EA5E9]/50 hover:bg-[#2e2e2e] text-[#CBD5E1] hover:text-white text-xs sm:text-sm font-mono font-medium transition-all duration-200 flex items-center gap-1.5 cursor-default hover:-translate-y-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] opacity-80" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                <span>Verified in projects</span>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
