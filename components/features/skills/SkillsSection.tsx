"use client"

import Image from "next/image"
import { skills } from "@/data"
import { FadeInSection } from "@/components/ui/FadeInSection"

export function SkillsSection() {
    return (
        <FadeInSection>
            <section id="skills" className="mb-32">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Favorite Tools</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                        >
                            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </FadeInSection>
    )
}
