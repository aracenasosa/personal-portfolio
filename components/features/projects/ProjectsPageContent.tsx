"use client";

import Link from "next/link";
import { ProjectCard } from "@/components/features/projects/ProjectCard";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useLanguage } from "@/components/providers/language-provider";
import type { PortfolioData } from "@/types/sanity";

interface ProjectsPageContentProps {
  data: PortfolioData;
}

export function ProjectsPageContent({ data }: ProjectsPageContentProps) {
  const { dictionary } = useLanguage();
  const { projects } = data;
  const sortedProjects = [...projects].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  const workProjects = sortedProjects.filter((p) => p.projectType === "work");
  const personalProjects = sortedProjects.filter(
    (p) => !p.projectType || p.projectType === "personal"
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between gap-4 mb-8">
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
            {dictionary.actions.backToPortfolio}
          </Link>

          <div className="flex gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="mb-12">
          <SectionBadge icon={<span className="w-2 h-2 rounded-full bg-primary" />}>
            {dictionary.sections.allProjects}
          </SectionBadge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            {dictionary.pages.projectsTitle}
          </h1>

          <p className="text-xl text-muted-foreground w-full">
            {dictionary.pages.projectsDescription(projects.length)}
          </p>
        </div>

        {workProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              {dictionary.sections.workProjects}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-3 gap-6">
              {workProjects.map((project, index) => (
                <FadeInSection key={project._key} delay={index * 0.1}>
                  <ProjectCard {...project} />
                </FadeInSection>
              ))}
            </div>
          </div>
        )}

        {personalProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              {dictionary.sections.personalProjects}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-3 gap-6">
              {personalProjects.map((project, index) => (
                <FadeInSection key={project._key} delay={index * 0.1}>
                  <ProjectCard {...project} />
                </FadeInSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
