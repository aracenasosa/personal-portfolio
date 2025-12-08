"use client"

import Skeleton from "react-loading-skeleton"

export function ProjectsSkeleton() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Navigation Skeleton */}
                <div className="mb-8">
                    <Skeleton width={120} height={20} baseColor="#202020" highlightColor="#444" />
                </div>

                {/* Header Skeleton */}
                <div className="mb-12">
                    <Skeleton width={100} height={30} borderRadius={6} className="mb-4" baseColor="#202020" highlightColor="#444" />
                    <Skeleton width="40%" height={60} className="mb-6" baseColor="#202020" highlightColor="#444" />
                    <Skeleton count={2} className="w-full max-w-3xl" baseColor="#202020" highlightColor="#444" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="rounded-3xl overflow-hidden border border-border/50 bg-card h-[400px]">
                            <Skeleton height={250} baseColor="#202020" highlightColor="#444" />
                            <div className="p-6">
                                <Skeleton width="30%" height={20} className="mb-2" baseColor="#202020" highlightColor="#444" />
                                <Skeleton width="70%" height={28} baseColor="#202020" highlightColor="#444" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
