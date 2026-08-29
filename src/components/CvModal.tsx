import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  User,
} from 'lucide-react';
import {
  personalInfo,
  aboutContent,
  skillCategories,
  projectsData,
  experienceData,
  educationData,
  certificationsData,
  servicesData,
} from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'quick-view'>('preview');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        id="cv-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#121212] border border-white/10 shadow-2xl overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 bg-[#171717] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] flex items-center justify-center text-white shadow-md shadow-[#0EA5E9]/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Curriculum Vitae & Resume
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#0EA5E9]/20 text-[#0EA5E9] border border-[#0EA5E9]/30">
                  Interactive CV
                </span>
              </h2>
              <p className="text-xs font-mono text-[#94A3B8]">
                {personalInfo.name} — {personalInfo.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Print / Save as PDF Button */}
            <button
              id="cv-print-btn"
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/10 text-white text-xs font-bold transition-all shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#0EA5E9]" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            {/* Direct PDF Link if available */}
            <a
              id="cv-download-pdf-btn"
              href={personalInfo.resumeUrl}
              download="Muhammad_Hamza_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-bold transition-all shadow-md shadow-[#0EA5E9]/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              id="cv-modal-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close CV dialog"
              className="p-2 rounded-xl bg-[#262626] border border-white/10 text-[#94A3B8] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Clean Document Container (Structured formatted Resume) */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 print:p-0 print:bg-white print:text-black">
          {/* Printable / Viewable Resume Sheet */}
          <div className="w-full bg-[#18181B] text-[#F8FAFC] rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10 shadow-xl space-y-8 print:border-none print:shadow-none print:bg-white print:text-black print:p-0">
            
            {/* Header: Name, Contact & Profile Pic */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 border-b border-white/10 pb-6 print:border-neutral-300">
              <div className="space-y-2 text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                    {personalInfo.name}
                  </h1>
                </div>
                <p className="text-sm font-semibold text-[#0EA5E9] font-mono print:text-blue-700">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-[#94A3B8] leading-relaxed max-w-2xl print:text-neutral-700">
                  {personalInfo.intro}
                </p>

                {/* Contact Bar */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 pt-2 text-xs text-[#CBD5E1] print:text-neutral-800">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0EA5E9] print:text-neutral-700" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0EA5E9] print:text-neutral-700" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-[#94A3B8] print:text-neutral-700">
                    <MapPin className="w-3.5 h-3.5 text-[#0EA5E9] print:text-neutral-700" />
                    <span>{personalInfo.location}</span>
                  </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0EA5E9] print:text-neutral-700" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#0EA5E9] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-[#0EA5E9] print:text-neutral-700" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Photo Avatar Thumbnail */}
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#0EA5E9]/40 shadow-lg p-0.5 bg-[#262626] print:border-neutral-400">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0EA5E9] font-mono flex items-center gap-2 border-b border-white/10 pb-2 print:border-neutral-300 print:text-blue-800">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience & Internships</span>
              </h3>

              <div className="space-y-4">
                {experienceData.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#202023] border border-white/5 space-y-2 print:bg-transparent print:border-b print:border-neutral-200 print:p-0 print:pb-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="font-bold text-white text-sm sm:text-base print:text-black">
                          {exp.role}
                        </span>
                        <span className="text-[#0EA5E9] text-xs font-semibold sm:ml-2 font-mono print:text-blue-700">
                          @ {exp.company}
                        </span>
                        {exp.status && (
                          <span className="ml-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 print:border-emerald-600 print:text-emerald-700">
                            {exp.status}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#94A3B8] font-mono print:text-neutral-600">
                        {exp.period} • {exp.location}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed print:text-neutral-800">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skillsUsed.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-[#2A2A2E] text-[11px] text-[#CBD5E1] rounded-md font-mono border border-white/5 print:bg-neutral-100 print:text-black print:border-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0EA5E9] font-mono flex items-center gap-2 border-b border-white/10 pb-2 print:border-neutral-300 print:text-blue-800">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>

              <div className="p-4 rounded-xl bg-[#202023] border border-white/5 space-y-2 print:bg-transparent print:border-none print:p-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-white text-sm sm:text-base print:text-black">
                      {educationData.degree}
                    </span>
                    <span className="text-[#94A3B8] text-xs block sm:inline sm:ml-2 print:text-neutral-600">
                      — {educationData.institution} ({educationData.campus})
                    </span>
                  </div>
                  <div className="text-xs text-[#0EA5E9] font-mono font-bold print:text-blue-700">
                    {educationData.period} • {educationData.status}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-1 text-xs">
                  <div className="inline-flex items-center gap-1.5 text-[#CBD5E1] print:text-black">
                    <span className="text-[#94A3B8] print:text-neutral-600">Cumulative CGPA:</span>
                    <span className="font-bold font-mono text-[#0EA5E9] print:text-blue-800">{educationData.cgpa}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[#CBD5E1] print:text-black">
                    <span className="text-[#94A3B8] print:text-neutral-600">Latest Semester GPA:</span>
                    <span className="font-bold font-mono text-emerald-400 print:text-emerald-700">{educationData.latestGpa}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0EA5E9] font-mono flex items-center gap-2 border-b border-white/10 pb-2 print:border-neutral-300 print:text-blue-800">
                <Code2 className="w-4 h-4" />
                <span>Key Engineering Projects</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectsData.slice(0, 4).map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl bg-[#202023] border border-white/5 space-y-2 print:bg-transparent print:border print:border-neutral-200 print:p-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-white text-xs sm:text-sm print:text-black">
                        {proj.title}
                      </h4>
                      {proj.isInternship && (
                        <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#0EA5E9]/20 text-[#0EA5E9] shrink-0 border border-[#0EA5E9]/30">
                          Internship
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#CBD5E1] line-clamp-2 leading-relaxed print:text-neutral-800">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.technologies.slice(0, 5).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 bg-[#2A2A2E] text-[10px] text-[#94A3B8] rounded font-mono print:bg-neutral-100 print:text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {proj.githubUrl && (
                      <div className="pt-1">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-[#0EA5E9] hover:underline inline-flex items-center gap-1 print:text-blue-700"
                        >
                          <Github className="w-3 h-3" />
                          <span>View Codebase</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0EA5E9] font-mono flex items-center gap-2 border-b border-white/10 pb-2 print:border-neutral-300 print:text-blue-800">
                <Cpu className="w-4 h-4" />
                <span>Technical Skills & Tools</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {skillCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#202023] border border-white/5 space-y-1.5 print:bg-transparent print:border print:border-neutral-200 print:p-2"
                  >
                    <span className="text-xs font-bold text-[#0EA5E9] font-mono uppercase tracking-wider print:text-blue-800">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-1.5 py-0.5 bg-[#2A2A2E] text-[10px] text-[#CBD5E1] rounded font-mono print:bg-neutral-100 print:text-black"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#0EA5E9] font-mono flex items-center gap-2 border-b border-white/10 pb-2 print:border-neutral-300 print:text-blue-800">
                <Award className="w-4 h-4" />
                <span>Professional Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#202023] border border-white/5 text-xs text-[#CBD5E1] print:bg-transparent print:border print:border-neutral-200 print:text-black"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] shrink-0 print:text-blue-700" />
                    <div>
                      <span className="font-semibold text-white print:text-black block">{cert.title}</span>
                      <span className="text-[10px] text-[#94A3B8] font-mono print:text-neutral-600">{cert.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer info & Direct contact actions */}
        <div className="p-4 sm:p-5 bg-[#171717] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#94A3B8]">
            <span>Need full portfolio or custom version? Email: </span>
            <a href={`mailto:${personalInfo.email}`} className="text-[#0EA5E9] hover:underline font-mono font-bold">
              {personalInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-200 text-black text-xs font-bold transition-all shadow-md"
            >
              Print / Save CV
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/5 text-[#CBD5E1] text-xs font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
