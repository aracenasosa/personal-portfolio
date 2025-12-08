"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageGalleryProps {
    images: string[]
    projectTitle: string
    onImageClick: (index: number) => void
}

export function ImageGallery({ images, projectTitle, onImageClick }: ImageGalleryProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    onClick={() => onImageClick(index)}
                    className="group relative aspect-video overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
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
            ))}
        </div>
    )
}
