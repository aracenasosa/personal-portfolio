import type { EducationItem, ExperienceItem } from '@/types'

export const education: EducationItem[] = [
    {
        id: 'bachelor-cs',
        period: '2018 - 2020',
        title: 'Bachelor of Computer Science',
        organization: 'National University of Technology',
        description: 'Focused on front-end development, UI design, and web application architecture.'
    },
    {
        id: 'frontend-bootcamp',
        period: '2021 - 2022',
        title: 'Frontend Development Bootcamp',
        organization: 'Udemy / Online Course',
        description: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.'
    },
    {
        id: 'uiux-course',
        period: '2023',
        title: 'Advanced UI/UX Design Course',
        organization: 'Design+Code',
        description: 'Explored advanced design systems, motion design, and accessibility best practices.'
    }
]

export const experience: ExperienceItem[] = [
    {
        id: 'pixelforge-intern',
        period: '2021 - 2022',
        title: 'Frontend Developer Intern',
        organization: 'PixelForge Studio',
        description: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.'
    },
    {
        id: 'ui-engineer',
        period: '2022 - Present',
        title: 'UI Engineer',
        organization: 'Freelance / Remote Work',
        description: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.'
    }
]
