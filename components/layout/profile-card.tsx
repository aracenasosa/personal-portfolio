"use client"

import Image from "next/image"
import { Mail } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { Profile } from "@/types/sanity"

export function ProfileCard({ data }: { data: Profile }) {
    return (
        <div className="sticky top-8 h-fit flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{data.topLeftTitle}</h1>
                <span className="text-xs font-medium text-muted-foreground">{data.topTitle}</span>
            </div>

            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted">
                <Image
                    src={data.image ? urlFor(data.image).url() : '/placeholder.jpg'}
                    alt="Profile"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">Specialization:</span>
                <p className="font-medium">{data.specialization}</p>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">Based in:</span>
                <p className="font-medium">{data.baseIn}</p>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">Email:</span>
                <p className="font-medium">{data.email}</p>
            </div>

            <div className="flex gap-4 mt-auto">
                {data.github && (
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                        aria-label="GitHub"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                )}
                {data.linkedin && (
                    <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                )}
                {data.email && (
                    <a
                        href={`mailto:${data.email}`}
                        className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                )}
            </div>

            <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity cursor-pointer">
                Let's Work!
            </button>
        </div>
    )
}
