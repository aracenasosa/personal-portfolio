export interface TimelineItem {
    id: string
    period: string
    title: string
    organization: string
    description: string
}

export interface EducationItem extends TimelineItem {
    degree?: string
}

export interface ExperienceItem extends TimelineItem {
    position?: string
}
