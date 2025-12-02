import type { ProfileInfo, SocialLink } from '@/types'

export const profileInfo: ProfileInfo = {
    name: 'Carlos',
    title: 'Full-Stack JavaScript Engineer',
    specialization: 'Frontend-Focused Full-Stack Developer',
    location: 'Santo Domingo, Rep Dom.',
    email: 'caracenasosa@gmail.com',
    bio: 'I specialize in building digital experiences that are not only visually stunning but also highly functional and accessible.'
}

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/aracenasosa',
        icon: 'github'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/carlos-jose-aracena-sosa-16684a17b/',
        icon: 'linkedin'
    },
    {
        name: 'Email',
        url: 'mailto:caracenasosa@gmail.com',
        icon: 'mail'
    }
]
