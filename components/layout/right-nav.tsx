"use client"

import { Home, User, Briefcase, Mail } from "lucide-react"
import { NAV_ITEMS } from "@/lib/constants"

const iconMap = {
    home: Home,
    user: User,
    briefcase: Briefcase,
    mail: Mail
}

export function RightNav() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div className="flex flex-col gap-6 p-4 rounded-full bg-card/95 backdrop-blur-sm border-2 border-border shadow-2xl ring-1 ring-black/5">
                {NAV_ITEMS.map((item) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap]
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="p-3 rounded-full hover:bg-secondary transition-colors cursor-pointer"
                            aria-label={item.label}
                        >
                            <Icon className="w-5 h-5" />
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
