import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  FileText,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  Info,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-10 w-96 h-96 bg-[#0EA5E9]/5 blur-[120px] rounded-full" />
        <div className="absolute left-10 bottom-10 w-80 h-80 bg-[#6366F1]/5 blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          {/* Left Column: Hero Announcement & Main Pitch (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Banner card */}
            <div className="bg-gradient-to-br from-[#171717] to-[#1a1a1a] rounded-3xl p-6 sm:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between flex-1 shadow-2xl">
              <div className="relative z-10 space-y-5">
                {/* Status & Location Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div
                    id="hero-status-badge"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262626] border border-white/5 text-[#CBD5E1] text-[11px] font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[#0EA5E9] font-bold uppercase tracking-widest text-[10px]">Available for Hire</span>
                  </div>

                  <div
                    id="hero-location-badge"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#262626] border border-white/5 text-[#94A3B8] text-[11px] font-medium"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                {/* Main Headline */}
                <div className="space-y-2">
                  <span className="text-[#0EA5E9] text-xs font-bold tracking-[0.2em] uppercase font-mono block">
                    Software Engineer & AI Enthusiast
                  </span>
                  <h1
                    id="hero-name"
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
                  >
                    Building scalable software.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">
                      Solving real problems.
                    </span>
                  </h1>
                </div>

                {/* Tagline & Intro */}
                <p
                  id="hero-intro"
                  className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl"
                >
                  {personalInfo.intro}
                </p>

                {/* CTAs Button Grid */}
                <div className="pt-2 flex flex-wrap gap-3 items-center">
                  <a
                    id="hero-btn-view-projects"
                    href="#projects"
                    onClick={(e) => scrollToSection(e, '#projects')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    id="hero-btn-download-cv"
                    type="button"
                    onClick={onOpenCvModal}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs transition-all hover:-translate-y-0.5"
                  >
                    <Download className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    <span>Download CV</span>
                  </button>

                  <a
                    id="hero-btn-work-together"
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/5 text-[#CBD5E1] hover:text-white font-medium text-xs transition-all"
                  >
                    <span>Let's Work Together</span>
                  </a>
                </div>
              </div>

              {/* Background ambient glow inside card */}
              <div className="absolute right-0 top-0 w-72 h-72 bg-[#0EA5E9]/5 blur-[90px] rounded-full pointer-events-none" />
            </div>

            {/* Core Technologies Bar */}
            <div className="bg-[#171717] rounded-3xl p-5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
              <div>
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest block font-mono">
                  Technical Stack
                </span>
              </div>
              <div id="hero-core-tech" className="flex flex-wrap gap-1.5 sm:justify-end">
                {personalInfo.coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#262626] rounded-md text-[11px] text-[#CBD5E1] border border-white/5 font-mono font-medium hover:border-[#0EA5E9]/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Identity Card (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div
              id="hero-profile-container"
              className="bg-[#171717] rounded-3xl p-6 sm:p-7 border border-white/5 flex flex-col items-center text-center shadow-2xl relative overflow-hidden flex-1 justify-between"
            >
              {/* Profile Avatar Frame with Status */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#0EA5E9] p-1 mb-4 relative group shadow-lg shadow-[#0EA5E9]/20">
                  <div className="w-full h-full rounded-full bg-[#262626] flex items-center justify-center overflow-hidden shadow-inner">
                    {!imageError ? (
                      <img
                        id="profile-img"
                        src={personalInfo.avatarUrl}
                        alt="Muhammad Hamza - Software Engineer"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-2">
                        <span className="text-sm font-bold text-[#64748B] font-mono">/profile.jpg</span>
                        <span className="text-[10px] text-[#0EA5E9] font-mono font-bold">MH</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#171717] shadow-sm ring-2 ring-emerald-500/30" title="Online / Available" />
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {personalInfo.name}
                </h2>
                <p className="text-[11px] text-[#0EA5E9] font-bold tracking-widest uppercase mt-1 mb-3 font-mono">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm mb-5">
                  {personalInfo.tagline}
                </p>

                {/* Academic Quick Stat Grid */}
                <div className="grid grid-cols-2 gap-3 w-full mb-4">
                  <div className="bg-[#262626] p-3 rounded-2xl border border-white/5 text-center">
                    <div className="text-base font-extrabold text-white font-mono">3.10</div>
                    <div className="text-[9px] text-[#64748B] uppercase font-bold tracking-wider font-mono">Cumulative CGPA</div>
                  </div>
                  <div className="bg-[#262626] p-3 rounded-2xl border border-white/5 text-center">
                    <div className="text-base font-extrabold text-white font-mono">3.80</div>
                    <div className="text-[9px] text-[#64748B] uppercase font-bold tracking-wider font-mono">Latest Semester GPA</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles & Quick Connect */}
              <div className="w-full pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest font-mono">
                    Connect
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      id="hero-social-github"
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/5 text-[#CBD5E1] hover:text-white transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      id="hero-social-linkedin"
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/5 text-[#CBD5E1] hover:text-white transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      id="hero-social-email"
                      href={`mailto:${personalInfo.email}`}
                      className="p-2 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/5 text-[#CBD5E1] hover:text-white transition-colors"
                      aria-label="Email Address"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <a
                  id="hero-card-contact-btn"
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full py-2 px-4 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#0EA5E9]/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Conversation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
