import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionBadgeProps {
    children: ReactNode
    className?: string
    icon?: ReactNode
}

export function SectionBadge({ children, className, icon }: SectionBadgeProps) {
    return (
        <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium", className)}>
            {icon}
            {children}
        </div>
    )
}
