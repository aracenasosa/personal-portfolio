"use client"

import { projects } from "@/data"
import { ProjectCard } from "./ProjectCard"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"

export function ProjectsSection() {
    return (
        <FadeInSection>
            <section id="projects" className="mb-32">
                <div className="flex items-center justify-between mb-10">
                    <SectionBadge icon={<span className="w-2 h-2 rounded-full bg-primary" />}>
                        Projects
                    </SectionBadge>
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                        View All Projects →
                    </a>
                </div>

                <h2 className="text-3xl font-bold mb-8">My Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </section>
        </FadeInSection>
    )
}
