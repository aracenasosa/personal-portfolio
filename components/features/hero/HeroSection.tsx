"use client"

import { Sparkles } from "lucide-react"
import { profileInfo, stats } from "@/data"
import { DOWNLOAD_LINKS } from "@/lib/constants"
import { FadeInSection } from "@/components/ui/FadeInSection"

export function HeroSection() {
    return (
        <FadeInSection>
            <section id="home" className="mb-32 pt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm font-medium mb-8 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    Introduction
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-8">
                    I'm {profileInfo.name} Aracena <br />
                    Full-Stack JavaScript <br />
                    Developer.
                </h1>

                <div className="flex flex-wrap gap-4 mb-12">
                    <a
                        href={DOWNLOAD_LINKS.RESUME}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors cursor-pointer inline-block text-center"
                    >
                        Download Resume
                    </a>
                    <a
                        href={DOWNLOAD_LINKS.COVER_LETTER}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-xl border border-border/50 bg-background hover:bg-secondary transition-colors font-medium cursor-pointer inline-block text-center"
                    >
                        Download Cover Letter
                    </a>
                </div>

                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    {profileInfo.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-card border border-border/50">
                            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </FadeInSection>
    )
}
