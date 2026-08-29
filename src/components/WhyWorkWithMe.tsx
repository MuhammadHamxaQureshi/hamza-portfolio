import React from 'react';
import { Lightbulb, GraduationCap, Layers, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { whyWorkData } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-work-with-me" className="py-16 lg:py-20 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span className="tracking-wider">CORE PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-xl">
            A grounded, practical approach to software engineering based on disciplined learning and building functional systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkData.map((item, idx) => (
            <div
              key={idx}
              id={`why-work-card-${idx}`}
              className="rounded-3xl bg-[#171717] border border-white/5 p-6 flex flex-col justify-between hover:border-[#0EA5E9]/40 transition-all duration-300 shadow-2xl group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-[#262626] border border-white/5 w-fit group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#0EA5E9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
