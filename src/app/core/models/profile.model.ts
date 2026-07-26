export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string[];
  social: SocialLinks;
  resumeUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  dateRange: string;
}

export interface Company {
  name: string;
  location: string;
  totalDuration: string;
  roles: ExperienceEntry[];
  bullets: string[];
  current: boolean;
}

export interface EducationEntry {
  school: string;
  degree: string;
  years: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
}
