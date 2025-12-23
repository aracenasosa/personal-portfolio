import { cn } from "@/lib/utils";

interface SectionBadgeProps {
    children?: React.ReactNode
    className?: string
    icon?: React.ReactNode
}

export function SectionBadge({ children, className, icon }: SectionBadgeProps) {
    return (
        <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium border-2 border-border dark:border-none shadow-sm dark:shadow-none", className)}>
            {icon}
            {children}
        </div>
    )
}
