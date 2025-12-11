"use client"

import { useEffect } from "react"
import { useLenis } from "lenis/react"

export function ScrollToTop() {
    const lenis = useLenis()

    useEffect(() => {
        // Force scroll to top immediately on mount
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo(0, 0)
        }
    }, [lenis])

    return null
}
