"use client"

import { FadeInSection } from "@/components/ui/FadeInSection"

export function ContactSection() {
    return (
        <FadeInSection>
            <section id="contact" className="mb-32">
                <div className="p-12 rounded-3xl bg-secondary/30 border border-border/50 text-center">
                    <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
                    <p className="text-muted-foreground mb-6">Available for freelance projects</p>
                    <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                        Contact Me
                    </button>
                </div>
            </section>
        </FadeInSection>
    )
}
