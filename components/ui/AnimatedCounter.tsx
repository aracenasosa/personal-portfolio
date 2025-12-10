"use client"

import CountUp from "react-countup"

interface AnimatedCounterProps {
    value: string
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
    // Regular expression to match leading number
    const match = value.match(/^(\d+)(.*)$/)

    if (match) {
        const number = parseInt(match[1], 10)
        const suffix = match[2]

        return (
            <span>
                <CountUp
                    end={number}
                    duration={2}
                    formattingFn={(n) => (n < 10 ? `0${n}+` : `${n}+`)}
                />
                {suffix}
            </span>
        )
    }

    return <span>{value}</span>
}
