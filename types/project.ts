export interface Project {
    id: number
    title: string
    category: string
    image: string
    description: string
    fullDescription: string
    images: string[]
    technologies: string[]
    features: string[]
    liveUrl?: string
    githubUrl?: string
    timeline: string
    role: string
    teamSize?: string
    highlights?: string[]
}
