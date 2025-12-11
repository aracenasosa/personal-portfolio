"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageGalleryProps {
    images: string[]
    projectTitle: string
    onImageClick: (index: number) => void
}

export function ImageGallery({ images, projectTitle, onImageClick }: ImageGalleryProps) {
    const [showAll, setShowAll] = useState(false)
    // On mobile, show only first 4 images unless "Show all" is clicked, but always show all on desktop
    const MOBILE_PREVIEW_COUNT = 4

    const shouldShowButton = images.length > MOBILE_PREVIEW_COUNT

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => {
                    // Logic to hide images on mobile if they exceed the count and showAll is false
                    // But always show them on desktop (md:block)
                    const isHiddenOnMobile = index >= MOBILE_PREVIEW_COUNT && !showAll

                    return (
                        <div
                            key={index}
                            onClick={() => onImageClick(index)}
                            className={`group relative aspect-video overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer ${isHiddenOnMobile ? 'hidden md:block' : ''}`}
                        >
                            <Image
                                src={image}
                                alt={`${projectTitle} - Image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            {/* Hover overlay with zoom icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-foreground"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Show all / Show less link - Only visible on mobile */}
            {shouldShowButton && (
                <div className="flex justify-center mt-6 md:hidden">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors cursor-pointer bg-transparent border-0"
                    >
                        {showAll ? 'Show less' : `Show all (${images.length} photos)`} →
                    </button>
                </div>
            )}
        </div>
    )
}
