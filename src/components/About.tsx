import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  Terminal,
  Cpu,
  User,
} from 'lucide-react';
import { aboutContent, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span className="tracking-wider">BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-[#94A3B8] leading-relaxed text-sm sm:text-base">
            {aboutContent.paragraphs.map((p, idx) => (
              <p
                key={idx}
                id={`about-paragraph-${idx + 1}`}
                className="p-5 rounded-2xl bg-[#171717] border border-white/5 hover:border-white/10 text-[#CBD5E1] transition-colors leading-relaxed shadow-lg"
              >
                {p}
              </p>
            ))}

            {/* Quick engineering values highlight */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#171717] border border-white/5 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Full-Stack Engineering
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Modern SPAs, backend REST APIs, relational schemas & clean architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#171717] border border-white/5 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-[#6366F1] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Intelligent Systems
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Computer vision, vector embeddings, and recommendation pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Academic & Project Statistics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#171717] border border-white/5 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#262626] border border-white/5 text-[#0EA5E9]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Academic Highlights</h3>
                    <p className="text-xs text-[#94A3B8]">COMSATS Abbottabad Campus</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#0EA5E9] bg-[#262626] px-2.5 py-1 rounded-full border border-white/5">
                  2024 – 2028
                </span>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {aboutContent.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    id={`stat-card-${idx}`}
                    className="p-4 rounded-2xl bg-[#262626] border border-white/5 hover:border-[#0EA5E9]/40 transition-all duration-200 group"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-[#0EA5E9] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-[#CBD5E1] mt-1">
                      {stat.label}
                    </div>
                    {stat.sublabel && (
                      <div className="text-[10px] text-[#64748B] mt-0.5 font-mono uppercase">
                        {stat.sublabel}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Code snippet style personal summary */}
              <div className="rounded-2xl bg-[#0A0A0A] p-4 border border-white/5 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-[#64748B] border-b border-white/5 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <span>engineer_profile.json</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">● active</span>
                </div>
                <div className="space-y-1 text-[#CBD5E1]">
                  <p><span className="text-[#0EA5E9]">"candidate"</span>: <span className="text-[#F8FAFC]">"Muhammad Hamza"</span>,</p>
                  <p><span className="text-[#0EA5E9]">"degree"</span>: <span className="text-[#F8FAFC]">"BS Software Engineering"</span>,</p>
                  <p><span className="text-[#0EA5E9]">"location"</span>: <span className="text-[#F8FAFC]">"Abbottabad, Pakistan"</span>,</p>
                  <p><span className="text-[#0EA5E9]">"seeking"</span>: <span className="text-emerald-400">["Internships", "Full-Stack Roles", "Freelance"]</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
