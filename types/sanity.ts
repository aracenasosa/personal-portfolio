import type { LocalizedValue } from "@/lib/i18n";

export type PortableTextBlock = {
  _type: string;
  _key?: string;
  [key: string]: unknown;
};

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Stat {
  _key: string;
  value: string;
  label: LocalizedValue<string>;
}

export interface Introduction {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  cv: string;
  cl: string;
  stats: Stat[];
}

export interface Project {
  _key?: string;
  title: LocalizedValue<string>;
  projectType?: "work" | "personal";
  slug: { current: string };
  category: LocalizedValue<string[]>;
  description: LocalizedValue<string>;
  fullDescription: LocalizedValue<PortableTextBlock[]>; // Portable Text blocks
  images: SanityImage[];
  technologies: string[];
  features: LocalizedValue<string[]>;
  liveUrl: string;
  githubUrl: string;
  timeline: LocalizedValue<string>;
  role: LocalizedValue<string>;
  teamSize: LocalizedValue<string>;
  highlights: LocalizedValue<string[]>;
  order: number;
}

export interface ResumeItem {
  _key: string;
  id?: string;
  title: LocalizedValue<string>;
  organization: LocalizedValue<string>;
  period: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface Resume {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  work: ResumeItem[];
  education: ResumeItem[];
  certifications: ResumeItem[];
  linkedinUrl?: string;
}

export interface About {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface Profile {
  topTitle: LocalizedValue<string>;
  topLeftTitle: LocalizedValue<string>;
  specialization: LocalizedValue<string>;
  baseIn: LocalizedValue<string>;
  email: string;
  github: string;
  linkedin: string;
  image: SanityImage;
}

export interface Recommendation {
  _key: string;
  name: string;
  role: LocalizedValue<string>;
  company: string;
  date: LocalizedValue<string>;
  relationship: LocalizedValue<string>;
  recommendation: LocalizedValue<string>;
  linkedinUrl?: string;
  image?: SanityImage;
}

export interface SkillItem {
  _key: string;
  name: LocalizedValue<string>;
  image: SanityImage;
}

export interface Skills {
  title: LocalizedValue<string>;
  items: SkillItem[];
}

export interface PortfolioData {
  _id: string;
  _type: "portfolio";
  introduction: Introduction;
  maxWorkProjects?: number;
  maxPersonalProjects?: number;
  workProjectsTitle?: LocalizedValue<string>;
  personalProjectsTitle?: LocalizedValue<string>;
  projects: Project[];
  about: About;
  resume: Resume;
  profile: Profile;
  recommendations: Recommendation[];
  skills: Skills;
}
