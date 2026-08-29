import React from 'react';
import {
  Layout,
  Code2,
  Server,
  Database,
  BrainCircuit,
  Eye,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-sky-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-indigo-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-emerald-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-rose-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-[#0EA5E9] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="tracking-wider">CAPABILITIES & SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What I Can Build
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-xl">
              Engineered for both scalable company products and high-impact freelance development projects.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] rounded-full mt-3" />
          </div>

          <a
            id="services-start-project-top-btn"
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-bold shadow-md shadow-[#0EA5E9]/20 hover:shadow-[#0EA5E9]/30 transition-all hover:-translate-y-0.5"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-3xl bg-[#171717] border border-white/5 p-6 flex flex-col justify-between hover:border-[#0EA5E9]/40 transition-all duration-300 shadow-2xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-[#262626] border border-white/5 w-fit group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#0EA5E9] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-6 mt-4 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#0EA5E9] hover:text-white group-hover:translate-x-1 transition-all"
                >
                  <span>Inquire for this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
