import { Project } from "@/types/sanity"
import { ProjectCard } from "./ProjectCard"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import Link from "next/link"

const MAX_PROJECTS_ON_HOME = 4

interface ProjectsSectionProps {
    projects: Project[]
}

export default function ProjectsSection({ projects: sanityProjects }: ProjectsSectionProps) {
    const displayedProjects = sanityProjects?.slice(0, MAX_PROJECTS_ON_HOME) || []
    const hasMoreProjects = (sanityProjects?.length || 0) > MAX_PROJECTS_ON_HOME

    return (
        <FadeInSection>
            <section id="projects" className="mb-32">
                <div className="flex items-center justify-between mb-10">
                    <SectionBadge icon={<span className="w-2 h-2 rounded-full bg-primary" />}>
                        Projects
                    </SectionBadge>
                    {hasMoreProjects && (
                        <Link
                            href="/projects"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            View All Projects →
                        </Link>
                    )}
                </div>

                <h2 className="text-3xl font-bold mb-8">My Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project._key || project.slug.current} {...project} />
                    ))}
                </div>
            </section>
        </FadeInSection>
    )
}
