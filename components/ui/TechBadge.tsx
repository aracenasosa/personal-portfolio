interface TechBadgeProps {
    name: string
}

export function TechBadge({ name }: TechBadgeProps) {
    return (
        <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors">
            {name}
        </div>
    )
}
