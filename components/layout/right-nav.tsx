"use client"

import { Home, User, Code, Briefcase, Star, Menu, X, Wrench } from "lucide-react"
import { NAV_ITEMS } from "@/lib/constants"
import { useState } from "react"

const iconMap = {
    home: Home,
    user: User,
    wrench: Wrench,
    code: Code,
    briefcase: Briefcase,
    star: Star
}

export function RightNav() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsOpen(false) // Close menu after clicking on mobile
        }
    }

    return (
        <>
            {/* Desktop Navigation - Fixed right side */}
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

            {/* Mobile/Tablet Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 left-6 z-50 lg:hidden p-3 rounded-full bg-card/95 backdrop-blur-sm border-2 border-border shadow-lg hover:bg-secondary transition-all"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile/Tablet Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile/Tablet Slide-in Menu */}
            <nav
                className={`fixed top-0 left-0 h-full w-64 bg-card border-r-2 border-border shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col gap-2 p-6 mt-20">
                    <h2 className="text-lg font-bold mb-6 text-muted-foreground">Navigation</h2>
                    {NAV_ITEMS.map((item) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap] || Star
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer text-left group"
                                aria-label={item.label}
                            >
                                {Icon && <Icon className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />}
                                <span className="font-medium">{item.label}</span>
                            </button>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}
