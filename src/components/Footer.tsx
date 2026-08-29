import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="portfolio-footer"
      className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-12 text-[#94A3B8] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-mono text-sm font-extrabold shadow-sm">
                MH
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </h2>
            </div>
            <p className="text-xs font-semibold text-[#0EA5E9] font-mono">
              {personalInfo.title}
            </p>
            <p className="text-[#94A3B8] text-xs sm:text-sm max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#0EA5E9] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Connect Online
            </h3>
            <div className="flex items-center gap-3">
              <a
                id="footer-social-github"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-xl bg-[#171717] border border-white/5 hover:border-[#0EA5E9]/40 text-[#CBD5E1] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-social-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-xl bg-[#171717] border border-white/5 hover:border-[#0EA5E9]/40 text-[#CBD5E1] hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-email"
                href={`mailto:${personalInfo.email}`}
                aria-label="Email address"
                className="p-2.5 rounded-xl bg-[#171717] border border-white/5 hover:border-[#0EA5E9]/40 text-[#CBD5E1] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#0EA5E9] hover:text-white transition-colors pt-2 font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>© 2026 Muhammad Hamza. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[#94A3B8]">
            <span>Engineered with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
