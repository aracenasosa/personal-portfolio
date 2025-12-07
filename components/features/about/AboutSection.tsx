import { About } from "@/types/sanity"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"

interface AboutSectionProps {
    data: About
}

export function AboutSection({ data }: AboutSectionProps) {
    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <FadeInSection>
            <section id="about" className="mb-32">
                <SectionBadge icon={<span className="w-2 h-2 rounded-full bg-primary" />} className="mb-8">
                    About
                </SectionBadge>

                <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">
                    {data.title}
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: data.description }}>

                </div>

            </section>
        </FadeInSection>
    )
}
