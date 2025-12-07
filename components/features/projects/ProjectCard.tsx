import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image"

function ProjectCard({ title, category, images, slug, _key }: Project) {
    const mainImage = images?.[0] ? urlFor(images[0]).url() : '/placeholder.jpg' // Fallback image
    //slug.current
    return (
        <Link href={`/project/${`${_key}`}`}>
            <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={mainImage}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-medium text-muted-foreground mb-2 block">
                        {Array.isArray(category) ? category.join(', ') : category}
                    </span>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
            </div>
        </Link>
    )
}

export { ProjectCard }
