"use client"

import Skeleton from "react-loading-skeleton"

export function ProjectDetailSkeleton() {
    return (
        <div className="min-h-screen bg-background">
            {/* Navigation Skeleton */}
            <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between mb-8">
                <Skeleton width={120} height={24} baseColor="#202020" highlightColor="#444" />
                <Skeleton width={100} height={24} baseColor="#202020" highlightColor="#444" />
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-8">
                {/* Header Skeleton */}
                <div className="mb-12 mt-8">
                    <Skeleton width="60%" height={60} className="mb-6" baseColor="#202020" highlightColor="#444" />
                    <Skeleton count={3} className="w-full mb-2" baseColor="#202020" highlightColor="#444" />
                    <Skeleton width="80%" className="mb-8" baseColor="#202020" highlightColor="#444" />

                    {/* Badges */}
                    <div className="flex gap-2 mb-8">
                        <Skeleton width={80} height={30} borderRadius={6} baseColor="#202020" highlightColor="#444" />
                        <Skeleton width={80} height={30} borderRadius={6} baseColor="#202020" highlightColor="#444" />
                        <Skeleton width={80} height={30} borderRadius={6} baseColor="#202020" highlightColor="#444" />
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 mt-8">
                        <Skeleton width={100} height={20} baseColor="#202020" highlightColor="#444" />
                        <Skeleton width={100} height={20} baseColor="#202020" highlightColor="#444" />
                        <Skeleton width={100} height={20} baseColor="#202020" highlightColor="#444" />
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-8">
                        <Skeleton width={160} height={48} borderRadius={12} baseColor="#202020" highlightColor="#444" />
                        <Skeleton width={160} height={48} borderRadius={12} baseColor="#202020" highlightColor="#444" />
                    </div>
                </div>

                {/* Gallery Skeleton */}
                <section className="mb-16">
                    <Skeleton width={200} height={32} className="mb-6" baseColor="#202020" highlightColor="#444" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
                        <Skeleton height={400} borderRadius={24} baseColor="#202020" highlightColor="#444" />
                        <div className="grid grid-cols-2 gap-4">
                            <Skeleton height={192} borderRadius={24} baseColor="#202020" highlightColor="#444" />
                            <Skeleton height={192} borderRadius={24} baseColor="#202020" highlightColor="#444" />
                            <Skeleton height={192} borderRadius={24} baseColor="#202020" highlightColor="#444" />
                            <Skeleton height={192} borderRadius={24} baseColor="#202020" highlightColor="#444" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
