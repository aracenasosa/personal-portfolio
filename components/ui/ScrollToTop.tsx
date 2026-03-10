"use client"

import { useEffect, useRef } from "react"
import { useLenis } from "lenis/react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
    const lenis = useLenis()
    const pathname = usePathname()
    const isPopState = useRef(false)

    useEffect(() => {
        const onPopState = () => {
            isPopState.current = true
        }
        window.addEventListener("popstate", onPopState)
        return () => window.removeEventListener("popstate", onPopState)
    }, [])

    useEffect(() => {
        if (isPopState.current) {
            // It was a browser back/forward navigation!
            // Let Next.js and the browser handle scroll restoration natively.
            isPopState.current = false
        } else {
            // It was an app link click OR a fresh page refresh
            if (lenis) {
                lenis.scrollTo(0, { immediate: true })
            } else {
                window.scrollTo(0, 0)
            }
        }
    }, [pathname, lenis])

    return null
}
