import { useRef } from 'react'

interface UseSwipeOptions {
    onSwipeLeft: () => void
    onSwipeRight: () => void
    minSwipeDistance?: number
}

export function useSwipe({ onSwipeLeft, onSwipeRight, minSwipeDistance = 50 }: UseSwipeOptions) {
    const touchStart = useRef<number | null>(null)
    const touchEnd = useRef<number | null>(null)

    const onTouchStart = (e: React.TouchEvent) => {
        touchEnd.current = null
        touchStart.current = e.targetTouches[0].clientX
    }

    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX
    }

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return

        const distance = touchStart.current - touchEnd.current
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            onSwipeLeft()
        } else if (isRightSwipe) {
            onSwipeRight()
        }

        // Reset
        touchStart.current = null
        touchEnd.current = null
    }

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    }
}
