"use client"

import { notFound } from "next/navigation"
import { ImageGallery } from "@/components/features/projects/ImageGallery"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { ImageModal } from "@/components/features/projects/ImageModal"
import { TechBadge } from "@/components/ui/TechBadge"
import { SectionBadge } from "@/components/ui/SectionBadge"
import { useState, use, useEffect } from "react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { projectQuery } from "@/sanity/lib/queries"
import { Project } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image"
import { ProjectDetailSkeleton } from "@/components/features/skeletons/ProjectDetailSkeleton"
import { PortableText } from "@portabletext/react"

interface ProjectDetailPageProps {
    params: Promise<{
        id: string
    }>
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = use(params)
    const [project, setProject] = useState<Project | null>(null)
    const [totalProjects, setTotalProjects] = useState(0)
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const result = await client.fetch(projectQuery, { id })
                if (!result || !result.project) {
                    notFound()
                }
                setProject(result.project)
                setTotalProjects(result.totalCount || 0)
            } catch (error) {
                console.error("Error fetching project:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProject()
    }, [id])

    // Scroll to top when loading finishes
    // ... imports

    // Remove the manual useEffect
    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index)
        setModalOpen(true)
    }



    // ... imports

    if (loading) {
        return <ProjectDetailSkeleton />
    }

    if (!project) return null

    const imageUrls = project.images?.map((img) => urlFor(img).url()) || []

    // Process categories: ensure it's an array for badges
    let categories: string[] = []
    if (Array.isArray(project.category)) {
        categories = project.category
    } else if (typeof project.category === 'string') {
        categories = (project.category as string).split(',').map(c => c.trim())
    }

    return (
        <div className="min-h-screen bg-background">
            <ScrollToTop />
            {/* Navigation */}
            <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                    Back to portfolio
                </Link>

                {totalProjects > 4 && (
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        All projects
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
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                )}
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-8">
                {/* Project Header */}
                <div className="mb-12 mt-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        {project.title}
                    </h1>

                    <div className="text-xl text-muted-foreground w-full mb-8">
                        <PortableText value={project.fullDescription} />
                    </div>

                    {/* Category Badges */}
                    {/* <div className="flex flex-wrap gap-2 mb-8">
                        {categories.map((cat, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium border-2 border-border rounded-md bg-card text-foreground shadow-sm dark:shadow-none"
                            >
                                {cat}
                            </span>
                        ))}
                    </div> */}

                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-6 mt-8 text-sm">
                        {project.timeline && (
                            <div>
                                <span className="text-muted-foreground">Timeline:</span>
                                <span className="ml-2 font-medium">{project.timeline}</span>
                            </div>
                        )}
                        {project.role && (
                            <div>
                                <span className="text-muted-foreground">Role:</span>
                                <span className="ml-2 font-medium">{project.role}</span>
                            </div>
                        )}
                        {project.teamSize && (
                            <div>
                                <span className="text-muted-foreground">Team:</span>
                                <span className="ml-2 font-medium">{project.teamSize}</span>
                            </div>
                        )}
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                                View Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border bg-background hover:bg-secondary transition-colors font-medium cursor-pointer shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-none"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>

                {/* Image Gallery */}
                {imageUrls.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                        <ImageGallery
                            images={imageUrls}
                            projectTitle={project.title}
                            onImageClick={handleImageClick}
                        />
                    </section>
                )}

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                        <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Project Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6">Project Highlights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {project.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-card border-2 border-border shadow-md dark:shadow-none"
                                >
                                    <div className="flex items-start gap-3">
                                        <svg
                                            className="w-6 h-6 text-primary flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                        <p className="text-sm text-muted-foreground">{highlight}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Image Modal */}
            {modalOpen && imageUrls.length > 0 && (
                <ImageModal
                    images={imageUrls}
                    initialIndex={selectedImageIndex}
                    onClose={() => setModalOpen(false)}
                    projectTitle={project.title}
                />
            )}
        </div>
    )
}
