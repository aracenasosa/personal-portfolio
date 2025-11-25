import Image from "next/image"

interface ProjectCardProps {
    title: string
    category: string
    image: string
}

export function ProjectCard({ title, category, image }: ProjectCardProps) {
    return (
        <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted cursor-pointer">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-6 left-6 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                    {category}
                </span>
            </div>
        </div>
    )
}
