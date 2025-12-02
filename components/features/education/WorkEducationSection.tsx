"use client"

import { Sparkles } from "lucide-react"
import { education, experience } from "@/data"
import type { TimelineItem } from "@/types"
import { FadeInSection } from "@/components/ui/FadeInSection"

interface TimelineItemProps {
    item: TimelineItem
}

function TimelineItemComponent({ item }: TimelineItemProps) {
    return (
        <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
            <div className="text-sm text-muted-foreground mb-2">{item.period}</div>
            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
            <div className="text-sm text-muted-foreground mb-3">
                Course by <span className="font-medium">{item.organization}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
            </p>
        </div>
    )
}

export function WorkEducationSection() {
    return (
        <FadeInSection>
            <section id="education" className="mb-32">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm font-medium mb-8 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    Resume
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education And Practical Experience</h2>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                    With a background in Computer Science and hands-on experience in design and front-end development, I've worked on diverse projects ranging from landing pages to SaaS dashboards. Each project has strengthened my focus on building clean, functional, and user-friendly digital experiences.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Work Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
                        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-4 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-border">
                            {experience.map((item) => (
                                <TimelineItemComponent key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8">Education</h3>
                        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-4 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-border">
                            {education.map((item) => (
                                <TimelineItemComponent key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </FadeInSection>
    )
}
