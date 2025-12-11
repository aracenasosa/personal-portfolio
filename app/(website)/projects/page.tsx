import { ProjectCard } from "@/components/features/projects/ProjectCard"
import { SectionBadge } from "@/components/ui/SectionBadge"
import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/live"
import { portfolioQuery } from "@/sanity/lib/queries"
import { PortfolioData } from "@/types/sanity"

export default async function ProjectsPage() {
    const { data } = await sanityFetch({ query: portfolioQuery }) as { data: PortfolioData | null }

    if (!data) return <div>Loading...</div>

    const { projects } = data
    const sortedProjects = [...projects].sort((a, b) => (a.order || 0) - (b.order || 0))

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Navigation */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Portfolio
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <SectionBadge icon={<span className="w-2 h-2 rounded-full bg-primary" />}>
                        All Projects
                    </SectionBadge>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                        My Projects
                    </h1>

                    <p className="text-xl text-muted-foreground w-full">
                        A collection of {projects.length} projects showcasing web applications, mobile apps,
                        and SaaS platforms built with modern technologies and best practices.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProjects.map((project) => (
                        <ProjectCard key={project._key} {...project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
