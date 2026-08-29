import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span className="tracking-wider">ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl">
            Formal university engineering education combining core theoretical concepts with hands-on software development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-3xl bg-[#171717] border border-white/5 p-6 sm:p-8 shadow-2xl hover:border-[#0EA5E9]/40 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: University & Degree */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#262626] border border-white/5 text-[#0EA5E9]">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#262626] border border-white/5 text-[#0EA5E9] text-xs font-mono">
                    {educationData.status}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-1 pl-1">
                <p className="text-base font-semibold text-[#CBD5E1]">
                  {educationData.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#94A3B8]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    {educationData.campus}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#6366F1]" />
                    {educationData.period}
                  </span>
                </div>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed pl-1">
                Studying core software engineering principles, data structures and algorithms, object-oriented programming, database management systems, operating systems, software architecture, and artificial intelligence.
              </p>
            </div>

            {/* Right Col: Verified Academic Metrics */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#262626] border border-white/5 space-y-1">
                <span className="text-xs font-mono uppercase text-[#64748B] block font-bold tracking-wider">
                  Current Cumulative GPA
                </span>
                <div className="text-3xl font-extrabold text-white font-mono">
                  {educationData.cgpa}
                </div>
                <span className="text-[11px] text-[#0EA5E9] block font-mono">
                  Overall Academic Record
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#262626] border border-white/5 space-y-1">
                <span className="text-xs font-mono uppercase text-[#64748B] block font-bold tracking-wider">
                  Latest Semester GPA
                </span>
                <div className="text-3xl font-extrabold text-white font-mono">
                  {educationData.latestGpa}
                </div>
                <span className="text-[11px] text-emerald-400 block font-mono">
                  High Academic Distinction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
