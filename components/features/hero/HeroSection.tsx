import { Introduction } from "@/types/sanity"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { Home } from "lucide-react"

interface HeroSectionProps {
    data: Introduction
}

export function HeroSection({ data }: HeroSectionProps) {
    return (
        <FadeInSection>
            <section id="home" className="mb-32 pt-10">
                <SectionBadge icon={<Home className="w-4 h-4" />} className="mb-8">
                    Introduction
                </SectionBadge>
                <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-8" dangerouslySetInnerHTML={{ __html: data.title }}></h1>

                <div className="flex flex-wrap gap-4 mb-12">
                    {data.cv && (
                        <a
                            href={data.cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors cursor-pointer inline-block text-center"
                        >
                            Download Resume
                        </a>
                    )}
                    {data.cl && (
                        <a
                            href={data.cl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-xl border-2 border-border bg-background hover:bg-secondary transition-colors font-medium cursor-pointer inline-block text-center shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-none"
                        >
                            Download Cover Letter
                        </a>
                    )}
                </div>

                <p className="text-lg text-muted-foreground w-full max-w-full leading-relaxed">
                    {data.description}
                </p>

                <div className="flex flex-col [@media(min-width:1236px)]:flex-row justify-center gap-6 mt-12 mb-12">
                    {data.stats?.map((stat, index) => (
                        <div
                            key={stat._key || index}
                            className="p-6 rounded-2xl bg-card border-2 border-border shadow-lg w-full [@media(min-width:1236px)]:flex-1 flex flex-col items-center justify-center text-center"
                        >
                            <h3 className="text-3xl font-bold mb-1">
                                <AnimatedCounter value={stat.value} />
                            </h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section >
        </FadeInSection >
    )
}
