"use client"


import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"

export function AboutSection() {
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
                    Turning Complex Systems Into Simple, Human-Centered Interfaces
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I’m a full-stack engineer with a strong focus on modern front-end development, specializing in React, Next.js, TypeScript, and Angular. While frontend is where I’m strongest, I also have solid backend experience with Node/NestJS, .NET APIs, and Oracle, allowing me to understand and build full feature flows end-to-end. I blend clean engineering with thoughtful UI design to create fast, intuitive, and reliable user experiences.
                    </p>
                    <p>
                        Over the past several years, I’ve delivered production systems across travel-tech, telecom, and banking—building payment flows, internal dashboards, operational tools, and data-driven interfaces used daily by real customers and enterprise teams. Whether developing reusable component libraries, integrating secure APIs, or optimizing performance for large datasets, my goal is always the same: create modern, human-centered products that make complex tasks feel simple.
                    </p>
                </div>

            </section>
        </FadeInSection>
    )
}
