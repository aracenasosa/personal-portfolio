"use client"

import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function ProfileCard() {
    return (
        <div className="sticky top-8 h-fit flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Carlos</h1>
                <span className="text-xs font-medium text-muted-foreground">Full-Stack JavaScript Engineer</span>
            </div>

            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted">
                <Image
                    src="/profile/Profile.JPG"
                    alt="Profile"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">Specialization:</span>
                <p className="font-medium">Full-Stack Developer with Frontend Expertise</p>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">Based in:</span>
                <p className="font-medium">Santo Domingo, Rep Dom.</p>
            </div>

            <div className="flex gap-4 mt-auto">
                <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                    <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                    <Mail className="w-5 h-5" />
                </a>
            </div>

            <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity cursor-pointer">
                Let's Work!
            </button>
        </div>
    )
}
