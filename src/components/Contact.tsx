import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Code2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    show: boolean;
    type: 'notice' | 'success';
    title: string;
    message: string;
  } | null>(null);

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /**
   * Placeholder function for future email integration (e.g. EmailJS, Formspree, Resend, or custom backend API).
   * Replace this placeholder body with your active API endpoint.
   */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate validation and display honest integration feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionFeedback({
        show: true,
        type: 'notice',
        title: 'Form Validation Successful',
        message:
          'Your input passed all validation checks! As this is currently a static frontend deployment, you can directly reach Muhammad Hamza at iamhamxaqureshi@gmail.com or connect via LinkedIn. This form is pre-configured for integration with EmailJS / Formspree / Resend.',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span className="tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-xl">
            Have a project, opportunity, or idea? Feel free to get in touch.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Information Cards */}
            <div className="rounded-3xl bg-[#171717] border border-white/5 p-6 sm:p-7 shadow-2xl space-y-5">
              <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/5 pb-3">
                Contact Details
              </h3>

              {/* Email Item with copy */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#262626] border border-white/5 group hover:border-[#0EA5E9]/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#171717] border border-white/5 text-[#0EA5E9] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block font-bold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-[#0EA5E9] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-[#171717] hover:bg-[#333333] text-[#94A3B8] hover:text-white transition-colors shrink-0 border border-white/5"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Item with copy */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#262626] border border-white/5 group hover:border-[#0EA5E9]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#171717] border border-white/5 text-[#0EA5E9] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block font-bold">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-[#0EA5E9] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-xl bg-[#171717] hover:bg-[#333333] text-[#94A3B8] hover:text-white transition-colors shrink-0 border border-white/5"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#262626] border border-white/5">
                <div className="p-2.5 rounded-xl bg-[#171717] border border-white/5 text-[#0EA5E9] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block font-bold">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#CBD5E1]">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Professional Links */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-[#64748B] block mb-3 font-bold">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    id="contact-link-linkedin"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-2xl bg-[#262626] hover:bg-[#333333] border border-white/5 hover:border-[#0EA5E9]/40 text-[#CBD5E1] hover:text-white transition-all text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    id="contact-link-github"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-2xl bg-[#262626] hover:bg-[#333333] border border-white/5 hover:border-[#0EA5E9]/40 text-[#CBD5E1] hover:text-white transition-all text-xs font-medium"
                  >
                    <Github className="w-4 h-4 text-[#CBD5E1]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="p-6 rounded-3xl bg-[#171717] border border-white/5 space-y-3 shadow-xl">
              <span className="text-xs font-mono text-[#0EA5E9] font-bold uppercase block tracking-wider">
                Quick Engagement Options
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${personalInfo.email}?subject=Hiring%20Opportunity`}
                  className="px-4 py-2 rounded-full bg-[#0EA5E9] text-white font-bold text-xs shadow-md hover:bg-[#0284C7] transition-colors"
                >
                  Hire Me
                </a>
                <a
                  href={`mailto:${personalInfo.email}?subject=Project%20Collaboration`}
                  className="px-4 py-2 rounded-full bg-[#262626] border border-white/5 text-[#CBD5E1] hover:text-white text-xs font-bold transition-colors"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#171717] border border-white/5 p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                  Fill out the form below to initiate communication directly.
                </p>
              </div>

              {/* Notice Banner */}
              {submissionFeedback && (
                <div
                  id="contact-form-feedback"
                  className="p-4 rounded-2xl bg-[#262626] border border-[#0EA5E9]/40 text-cyan-200 text-xs space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-bold font-mono text-[#0EA5E9]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{submissionFeedback.title}</span>
                  </div>
                  <p className="leading-relaxed text-[#CBD5E1]">
                    {submissionFeedback.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-[#94A3B8] font-bold"
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#262626] border ${
                        errors.name ? 'border-red-500' : 'border-white/5'
                      } text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase text-[#94A3B8] font-bold"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#262626] border ${
                        errors.email ? 'border-red-500' : 'border-white/5'
                      } text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase text-[#94A3B8] font-bold"
                  >
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-2.5 rounded-2xl bg-[#262626] border ${
                      errors.subject ? 'border-red-500' : 'border-white/5'
                    } text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-[#94A3B8] font-bold"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell me about your project, goals, or role..."
                    className={`w-full px-4 py-2.5 rounded-2xl bg-[#262626] border ${
                      errors.message ? 'border-red-500' : 'border-white/5'
                    } text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-2xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-sm shadow-lg shadow-[#0EA5E9]/20 hover:shadow-[#0EA5E9]/30 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2 font-mono">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Validating...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
