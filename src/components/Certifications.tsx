import React, { useState } from 'react';
import { Award, ExternalLink, Sparkles, CheckCircle2, FileCheck, Info } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span className="tracking-wider">LEARNING & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-2xl">
            Specialized technical courses and certifications strengthening practical development and analytical competencies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="rounded-3xl bg-[#171717] border border-white/5 p-6 flex flex-col justify-between hover:border-[#0EA5E9]/40 transition-all duration-300 shadow-2xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#262626] border border-white/5 text-[#0EA5E9] group-hover:scale-105 transition-transform">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#0EA5E9] bg-[#262626] px-2.5 py-0.5 rounded-full border border-white/5">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#0EA5E9] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Technical & Applied Coursework
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/5 mt-4">
                <button
                  id={`cert-view-btn-${cert.id}`}
                  type="button"
                  onClick={() => setActiveCertModal(cert)}
                  className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0EA5E9]/40 text-xs font-bold text-[#CBD5E1] hover:text-white flex items-center justify-center gap-1.5 transition-colors font-mono"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0EA5E9]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Dialog */}
      {activeCertModal && (
        <div
          id="cert-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveCertModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            id="cert-modal-content"
            className="relative w-full max-w-md rounded-3xl bg-[#171717] border border-white/10 p-6 shadow-2xl space-y-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <div className="p-2.5 rounded-2xl bg-[#262626] text-[#0EA5E9] border border-white/5">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {activeCertModal.title}
                </h3>
                <span className="text-xs text-[#94A3B8] font-mono">
                  {activeCertModal.category}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#262626] border border-white/5 space-y-2 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2 text-[#0EA5E9] font-semibold font-mono">
                <Info className="w-4 h-4" />
                <span>Certificate Link Configuration</span>
              </div>
              <p>
                Certificate records and credentials can be attached directly to this card by updating the <code className="text-[#0EA5E9] font-mono bg-black/40 px-1 py-0.5 rounded">certificateUrl</code> in <code className="text-[#0EA5E9] font-mono bg-black/40 px-1 py-0.5 rounded">portfolioData.ts</code>.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveCertModal(null)}
                className="px-4 py-2 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
