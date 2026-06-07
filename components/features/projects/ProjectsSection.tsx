"use client"

import { Project } from "@/types/sanity"
import { ProjectCard } from "./ProjectCard"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import Link from "next/link"
import { Code, Briefcase, User, ArrowRight } from "lucide-react"
import { localize, type LocalizedValue } from "@/lib/i18n"
import { useLanguage } from "@/components/providers/language-provider"

interface ProjectsSectionProps {
    projects: Project[]
    maxWorkProjects?: number
    maxPersonalProjects?: number
    workProjectsTitle?: LocalizedValue<string>
    personalProjectsTitle?: LocalizedValue<string>
}

export default function ProjectsSection({ 
    projects: sanityProjects,
    maxWorkProjects = 3,
    maxPersonalProjects = 3,
    workProjectsTitle = "Production Projects",
    personalProjectsTitle = "Personal Projects",
}: ProjectsSectionProps) {
    const { language, dictionary } = useLanguage()
    const sortedProjects = [...(sanityProjects || [])].sort((a, b) => (a.order || 0) - (b.order || 0))
    const localizedWorkProjectsTitle = localize(workProjectsTitle, language) ?? dictionary.sections.workProjects
    const localizedPersonalProjectsTitle = localize(personalProjectsTitle, language) ?? dictionary.sections.personalProjects

    const workProjects = sortedProjects.filter(p => p.projectType === 'work').slice(0, maxWorkProjects)
    const personalProjects = sortedProjects.filter(p => !p.projectType || p.projectType === 'personal').slice(0, maxPersonalProjects)

    return (
        <FadeInSection>
            <section id="projects" className="mb-32 space-y-20">
                <div className="flex items-center justify-between">
                    <SectionBadge icon={<Code className="w-4 h-4" />}>
                        {dictionary.sections.projects}
                    </SectionBadge>
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {dictionary.actions.viewAllProjects}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {workProjects.length > 0 && (
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <Briefcase className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold">{localizedWorkProjectsTitle}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-3 gap-6">
                            {workProjects.map((project) => (
                                <ProjectCard key={project._key || project.slug.current} {...project} />
                            ))}
                        </div>
                    </div>
                )}

                {personalProjects.length > 0 && (
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <User className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold">{localizedPersonalProjectsTitle}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-3 gap-6">
                            {personalProjects.map((project) => (
                                <ProjectCard key={project._key || project.slug.current} {...project} />
                            ))}
                        </div>
                    </div>
                )}

            </section>
        </FadeInSection>
    )
}
