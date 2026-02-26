import { Project } from "@/types/sanity"
import { ProjectCard } from "./ProjectCard"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import Link from "next/link"
import { Code } from "lucide-react"
import { getValidMaxProjects } from "@/lib/utils"

interface ProjectsSectionProps {
    projects: Project[]
    maxProjectsOnHome?: number
}

export default function ProjectsSection({ 
    projects: sanityProjects,
    maxProjectsOnHome = 6
}: ProjectsSectionProps) {
    const validMaxProjects = getValidMaxProjects(maxProjectsOnHome)
    const sortedProjects = [...(sanityProjects || [])].sort((a, b) => (a.order || 0) - (b.order || 0))
    const displayedProjects = sortedProjects.slice(0, validMaxProjects)
    const hasMoreProjects = sortedProjects.length > validMaxProjects

    return (
        <FadeInSection>
            <section id="projects" className="mb-32">
                <div className="flex items-center justify-between mb-10">
                    <SectionBadge icon={<Code className="w-4 h-4" />}>
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
