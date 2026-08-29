import React from 'react';
import {
  Download,
  Printer,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Code2,
  Sparkles,
  Layers,
} from 'lucide-react';
import {
  personalInfo,
  experienceData,
  educationData,
  skillCategories,
  projectsData,
  certificationsData,
} from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCvModal }) => {
  return (
    <section id="resume" className="py-20 bg-[#0F0F11] border-y border-white/5 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0EA5E9]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#6366F1]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F23] border border-white/5 text-[#0EA5E9] text-xs font-mono font-bold tracking-wider uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Resume & Credentials
            </h2>
            <p className="text-sm text-[#94A3B8] max-w-xl">
              An overview of academic standing, internship experience, core competencies, and software engineering achievements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              id="resume-section-view-btn"
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-black text-xs font-bold transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Full CV</span>
            </button>

            <button
              id="resume-section-print-btn"
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#262626] hover:bg-[#333333] border border-white/10 text-white text-xs font-bold transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-[#0EA5E9]" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Live Resume Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Profile Card & Education / Contact (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Profile Summary */}
            <div className="bg-[#171717] rounded-3xl p-6 border border-white/5 shadow-xl space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#0EA5E9] p-0.5 bg-[#262626] shrink-0 shadow-md">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-[#0EA5E9]">
                    Software Engineer
                  </p>
                  <p className="text-[11px] text-[#94A3B8] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#0EA5E9]" />
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2.5 text-xs">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-[#CBD5E1] hover:text-[#0EA5E9] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-[#CBD5E1] hover:text-[#0EA5E9] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#CBD5E1] hover:text-[#0EA5E9] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#CBD5E1] hover:text-[#0EA5E9] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Academic Highlight */}
            <div className="bg-[#171717] rounded-3xl p-6 border border-white/5 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0EA5E9]">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Record</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{educationData.degree}</h4>
                <p className="text-xs text-[#94A3B8]">{educationData.institution}</p>
                <p className="text-[11px] font-mono text-[#0EA5E9] mt-0.5">{educationData.campus} ({educationData.period})</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                <div className="p-2.5 rounded-xl bg-[#262626] border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-[#94A3B8] block">Overall CGPA</span>
                  <span className="text-sm font-bold font-mono text-[#0EA5E9]">{educationData.cgpa}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#262626] border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-[#94A3B8] block">Latest GPA</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">{educationData.latestGpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Work Experience, Key Skills & Certifications Summary (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Experience List */}
            <div className="bg-[#171717] rounded-3xl p-6 sm:p-7 border border-white/5 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0EA5E9]">
                  <Briefcase className="w-4 h-4" />
                  <span>Work & Internship Experience</span>
                </div>
                <span className="text-[11px] font-mono text-[#94A3B8]">2 Roles</span>
              </div>

              <div className="space-y-5">
                {experienceData.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#202024] border border-white/5 space-y-2 hover:border-[#0EA5E9]/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">
                          {exp.role} <span className="text-[#0EA5E9] font-mono text-xs font-semibold">@ {exp.company}</span>
                        </h4>
                        {exp.status && (
                          <span className="inline-block mt-0.5 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            {exp.status}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#94A3B8] font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skillsUsed.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-[#2A2A2E] text-[11px] text-[#94A3B8] rounded font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Summary */}
            <div className="bg-[#171717] rounded-3xl p-6 sm:p-7 border border-white/5 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0EA5E9]">
                <Code2 className="w-4 h-4" />
                <span>Primary Technical Competencies</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#202024] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-[#0EA5E9] font-bold block">Frontend</span>
                  <p className="text-xs text-[#CBD5E1]">React.js, Tailwind CSS, JavaScript, HTML5/CSS3</p>
                </div>
                <div className="p-3 rounded-xl bg-[#202024] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-[#0EA5E9] font-bold block">Backend & APIs</span>
                  <p className="text-xs text-[#CBD5E1]">Node.js, Express.js, REST APIs, Spring Boot</p>
                </div>
                <div className="p-3 rounded-xl bg-[#202024] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-[#0EA5E9] font-bold block">Databases</span>
                  <p className="text-xs text-[#CBD5E1]">PostgreSQL, MySQL, MongoDB, SQL, Prisma</p>
                </div>
                <div className="p-3 rounded-xl bg-[#202024] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-[#0EA5E9] font-bold block">AI & Computer Vision</span>
                  <p className="text-xs text-[#CBD5E1]">OpenCV, YOLO, Vector Embeddings, Recommendation Engines</p>
                </div>
                <div className="p-3 rounded-xl bg-[#202024] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-[#0EA5E9] font-bold block">Languages</span>
                  <p className="text-xs text-[#CBD5E1]">C, C++, Java, C#, Python, JavaScript</p>
                </div>
                <div className="p-3 rounded-xl bg-[#202024] border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-[#0EA5E9] font-bold block">Developer Tools</span>
                  <p className="text-xs text-[#CBD5E1]">Git, GitHub, VS Code, Postman, Power BI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
