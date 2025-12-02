"use client"

import { Sparkles } from "lucide-react"
import { FadeInSection } from "@/components/ui/FadeInSection"

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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm font-medium mb-8 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    About
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">
                    Transforming Complexity Into Effortless Design
                </h2>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I'm a designer and front-end developer passionate about transforming complex problems into clear, intuitive digital experiences. I believe great design isn't just about how something looks—it's about how it works. My approach blends creativity with strategy, ensuring every interface not only looks good but also feels effortless to use.
                    </p>
                    <p>
                        Over the past few years, I've worked across web, brand, and product design—bringing ideas to life through modern tools like Figma, React, and Tailwind CSS. Whether it's building a design system, crafting a responsive website, or refining the smallest detail in a button animation, I'm always driven by one goal: creating meaningful, human-centered design that makes technology feel simple.
                    </p>
                </div>

                <button
                    onClick={scrollToContact}
                    className="mt-10 px-8 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                >
                    Contact Me
                </button>
            </section>
        </FadeInSection>
    )
}
