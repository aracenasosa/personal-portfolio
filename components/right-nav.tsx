"use client"

import { Home, User, Briefcase, Mail } from "lucide-react"

export function RightNav() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div className="flex flex-col gap-6 p-4 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 shadow-xl">
                <button
                    onClick={() => scrollToSection("home")}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Home"
                >
                    <Home className="w-5 h-5" />
                </button>
                <button
                    onClick={() => scrollToSection("about")}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="About"
                >
                    <User className="w-5 h-5" />
                </button>
                <button
                    onClick={() => scrollToSection("projects")}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Projects"
                >
                    <Briefcase className="w-5 h-5" />
                </button>
                <button
                    onClick={() => scrollToSection("contact")}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Contact"
                >
                    <Mail className="w-5 h-5" />
                </button>
            </div>
        </nav>
    )
}
