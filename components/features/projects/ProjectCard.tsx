import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image"

function ProjectCard({ title, category, images, slug, _key }: Project) {
    let mainImage = '/placeholder.jpg'
    try {
        if (images?.[0]) {
            mainImage = urlFor(images[0]).url()
        }
    } catch (error) {
        console.warn(`Failed to generate image URL for project: ${title}`, error)
    }
    //slug.current
    return (
        <Link href={`/project/${_key}`}>
            <div className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={mainImage}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {(Array.isArray(category) ? category : (category as string)?.split(',') || []).map((cat: string, i: number) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold border border-white/20 rounded-md bg-black/40 backdrop-blur-md text-white/90"
                            >
                                {cat.trim()}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{title}</h3>
                </div>
            </div>
        </Link>
    )
}

export { ProjectCard }
