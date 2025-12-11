"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-[72px] h-[36px] rounded-full bg-secondary" />
    }

    const isDark = resolvedTheme === "dark"

    return (
        <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`
        relative flex w-[72px] h-[36px] rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out border border-border
        ${isDark ? "bg-black" : "bg-white"}
      `}
        >
            {/* Inactive Icons Background Layer */}
            <div className="absolute inset-0 flex items-center justify-between px-2.5">
                <Sun className={`w-5 h-5 ${isDark ? "opacity-0" : "opacity-0"}`} /> {/* Placeholder to keep spacing */}
                <Moon className={`w-5 h-5 text-muted-foreground/50 ${isDark ? "opacity-0" : "opacity-100"}`} />
            </div>

            <div className="absolute inset-0 flex items-center justify-between px-2.5">
                <Sun className={`w-5 h-5 text-muted-foreground/50 ${isDark ? "opacity-100" : "opacity-0"}`} />
                <Moon className={`w-5 h-5 ${isDark ? "opacity-0" : "opacity-0"}`} /> {/* Placeholder */}
            </div>

            {/* Thumb */}
            <motion.div
                className="absolute top-1 w-[26px] h-[26px] rounded-full flex items-center justify-center text-white shadow-sm z-10"
                initial={false}
                animate={{
                    left: isDark ? "calc(100% - 30px)" : "4px",
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
                style={{ backgroundColor: "rgb(47,55,146)" }}
            >
                {isDark ? (
                    <Moon className="w-4 h-4" />
                ) : (
                    <Sun className="w-4 h-4" />
                )}
            </motion.div>
        </div>
    )
}
