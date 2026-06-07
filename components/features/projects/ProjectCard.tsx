"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Project } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image"
import { localize } from "@/lib/i18n"
import { useLanguage } from "@/components/providers/language-provider"

function ProjectCard({ title, category, images, description, _key }: Project) {
    const { language } = useLanguage()
    const localizedTitle = localize(title, language) ?? ""
    const localizedDescription = localize(description, language) ?? ""
    const localizedCategory = localize(category, language)
    const categories = Array.isArray(localizedCategory)
        ? localizedCategory
        : (localizedCategory as string | undefined)?.split(",") || []

    let mainImage = '/placeholder.jpg'
    try {
        if (images?.[0]) {
            mainImage = urlFor(images[0]).url()
        }
    } catch (error) {
        console.warn(`Failed to generate image URL for project: ${localizedTitle}`, error)
    }
    //slug.current
    return (
        <Link href={`/project/${_key}`}>
            <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
                <div className="relative aspect-[4/3] min-h-[380px] overflow-hidden">
                    <Image
                        src={mainImage}
                        alt={localizedTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {categories.map((cat: string, i: number) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold border border-white/20 rounded-md bg-black/40 backdrop-blur-md text-white/90 whitespace-nowrap"
                            >
                                {cat.trim()}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">{localizedTitle}</h3>
                    {localizedDescription && (
                        <p className="text-sm text-foreground/80 line-clamp-3 font-medium">
                            {localizedDescription}
                        </p>
                    )}
                </div>
            </motion.div>
        </Link>
    )
}

export { ProjectCard }
