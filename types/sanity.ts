export interface SanityImage {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface Stat {
    _key: string;
    value: string;
    label: string;
}

export interface Introduction {
    title: string;
    description: string;
    cv: string;
    cl: string;
    stats: Stat[];
}

export interface Project {
    _key?: string;
    title: string;
    slug: { current: string };
    category: string[];
    description: string;
    fullDescription: any[]; // Portable Text blocks
    images: SanityImage[];
    technologies: string[];
    features: string[];
    liveUrl: string;
    githubUrl: string;
    timeline: string;
    role: string;
    teamSize: string;
    highlights: string[];
    order: number;
}

export interface ResumeItem {
    _key: string;
    id?: string;
    title: string;
    organization: string;
    period: string;
    description: string;
}

export interface Resume {
    title: string;
    description: string;
    work: ResumeItem[];
    education: ResumeItem[];
    certifications: ResumeItem[];
}

export interface About {
    title: string;
    description: string;
}

export interface Profile {
    topTitle: string;
    topLeftTitle: string;
    specialization: string;
    baseIn: string;
    email: string;
    github: string;
    linkedin: string;
    image: SanityImage;
}

export interface PortfolioData {
    _id: string;
    _type: 'portfolio';
    introduction: Introduction;
    projects: Project[];
    about: About;
    resume: Resume;
    profile: Profile;
}
