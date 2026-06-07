"use client"

import { About } from "@/types/sanity"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import { User } from "lucide-react"
import { localize } from "@/lib/i18n"
import { useLanguage } from "@/components/providers/language-provider"

interface AboutSectionProps {
    data: About
}

export function AboutSection({ data }: AboutSectionProps) {
    const { language, dictionary } = useLanguage()
    const title = localize(data.title, language) ?? ""
    const description = localize(data.description, language) ?? ""

    return (
        <FadeInSection>
            <section id="about" className="mb-32">
                <SectionBadge icon={<User className="w-4 h-4" />} className="mb-8">
                    {dictionary.sections.about}
                </SectionBadge>

                <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">
                    {title}
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}>

                </div>

            </section>
        </FadeInSection>
    )
}
