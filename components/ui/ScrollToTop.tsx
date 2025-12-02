"use client"

import { useEffect } from "react"

export function ScrollToTop() {
    useEffect(() => {
        // Scroll to top on component mount with smooth behavior
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    return null
}
