"use client"

import Image from "next/image"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import { Wrench } from "lucide-react"
import { Skills } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image"
import { localize } from "@/lib/i18n"
import { useLanguage } from "@/components/providers/language-provider"

interface SkillsSectionProps {
    data: Skills
}

export function SkillsSection({ data }: SkillsSectionProps) {
    const { language, dictionary } = useLanguage()
    const title = localize(data?.title, language) ?? ""

    if (!data) return null;

    return (
        <FadeInSection>
            <section id="skills" className="mb-32">
                <SectionBadge icon={<Wrench className="w-4 h-4" />} className="mb-8">
                    {dictionary.sections.skills}
                </SectionBadge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">{title}</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {data.items?.map((skill) => {
                        const skillName = localize(skill.name, language) ?? ""

                        return (
                            <div
                                key={skill._key}
                                className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 shadow-md dark:shadow-none hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                            >
                                <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={urlFor(skill.image).url()}
                                        alt={skillName}
                                        fill
                                        sizes="64px"
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {skillName}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </section>
        </FadeInSection>
    )
}
