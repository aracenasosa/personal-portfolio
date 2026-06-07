"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Recommendation } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image"
import { FadeInSection } from "@/components/ui/FadeInSection"
import { SectionBadge } from "@/components/ui/SectionBadge"
import { useSwipe } from "@/hooks/useSwipe"
import { localize } from "@/lib/i18n"
import { useLanguage } from "@/components/providers/language-provider"

interface RecommendationsSectionProps {
    data: Recommendation[]
}

export function RecommendationsSection({ data }: RecommendationsSectionProps) {
    const { language, dictionary } = useLanguage()
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextRecommendation = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length)
    }

    const prevRecommendation = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)
    }

    const swipeHandlers = useSwipe({
        onSwipeLeft: nextRecommendation,
        onSwipeRight: prevRecommendation,
    })

    const currentRecommendation = data[currentIndex]
    const currentRole = localize(currentRecommendation.role, language) ?? ""
    const currentDate = localize(currentRecommendation.date, language) ?? ""
    const currentRelationship = localize(currentRecommendation.relationship, language) ?? ""
    const currentText = localize(currentRecommendation.recommendation, language) ?? ""

    return (
        <FadeInSection>
            <section id="recommendations" className="mb-32">
                <SectionBadge icon={<Star className="w-4 h-4" />} className="mb-8">
                    {dictionary.sections.recommendations}
                </SectionBadge>

                <h2 className="text-3xl sm:text-4xl font-bold mb-12">{dictionary.sections.linkedinRecommendations}</h2>

                <div className="relative">
                    {/* Recommendation Card */}
                    <div
                        className="bg-card border-2 border-border rounded-3xl p-8 md:p-12 shadow-lg"
                        {...swipeHandlers}
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden relative">
                                    {currentRecommendation.image ? (
                                        <Image
                                            src={urlFor(currentRecommendation.image).url()}
                                            alt={currentRecommendation.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-primary">
                                            {currentRecommendation.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-1">{currentRecommendation.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        {currentRole} {dictionary.labels.at} {currentRecommendation.company}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {currentRelationship} • {currentDate}
                                    </p>
                                </div>

                                {/* Recommendation Text */}
                                <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                                    {currentText}
                                </p>

                                {/* LinkedIn Link */}
                                {currentRecommendation.linkedinUrl && (
                                    <a
                                        href={currentRecommendation.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
                                    >
                                        {dictionary.actions.viewOnLinkedin} →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 mt-8">
                        <button
                            onClick={prevRecommendation}
                            className="w-12 h-12 rounded-full border border-border/50 bg-background hover:bg-secondary transition-colors flex items-center justify-center cursor-pointer"
                            aria-label={dictionary.labels.previousRecommendation}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextRecommendation}
                            className="w-12 h-12 rounded-full border border-border/50 bg-background hover:bg-secondary transition-colors flex items-center justify-center cursor-pointer"
                            aria-label={dictionary.labels.nextRecommendation}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex gap-2 mt-4">
                        {data.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1 rounded-full transition-all ${index === currentIndex
                                    ? "w-8 bg-primary"
                                    : "w-1 bg-border hover:bg-border/80"
                                    }`}
                                aria-label={dictionary.labels.goToRecommendation(index + 1)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </FadeInSection>
    )
}
