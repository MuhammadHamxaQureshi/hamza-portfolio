export interface PersonalInfo {
  name: string;
  title: string;
  coreTech: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  tagline: string;
  intro: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export type ProjectCategory = 'All' | 'Full-Stack' | 'AI/ML' | 'Computer Vision' | 'E-Commerce';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  filterCategory: ('Full-Stack' | 'AI/ML' | 'Computer Vision' | 'E-Commerce')[];
  isInternship?: boolean;
  description: string;
  architecture?: string[];
  pipeline?: string[];
  aiCapabilities?: string[];
  productCapabilities?: string[];
  analytics?: string[];
  enterpriseCapabilities?: string[];
  threatDetection?: string[];
  workflow?: string[];
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  imagePlaceholder?: string;
  statusBadge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Contract' | 'Part-time';
  status?: string;
  description: string;
  relatedProjectId?: string;
  skillsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  campus: string;
  period: string;
  status: string;
  cgpa: string;
  latestGpa: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  certificateUrl?: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface WhyWorkItem {
  title: string;
  description: string;
  iconName: string;
}
