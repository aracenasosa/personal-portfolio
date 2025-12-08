"use client"

import Skeleton from "react-loading-skeleton"

export function HomeSkeleton() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
                {/* Navigation Skeleton */}
                <div className="flex justify-end pt-8 mb-12">
                    <Skeleton width={100} height={40} borderRadius={99} baseColor="#202020" highlightColor="#444" />
                </div>

                <div className="flex flex-col lg:flex-row gap-8 relative">
                    {/* Left Column Skeleton - Fixed Profile */}
                    <div className="w-full lg:w-[400px] relative">
                        <div className="sticky top-8 h-fit flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border/50">
                            <div className="flex items-center justify-between">
                                <Skeleton width="60%" height={32} baseColor="#202020" highlightColor="#444" />
                                <Skeleton width="30%" height={24} baseColor="#202020" highlightColor="#444" />
                            </div>
                            <Skeleton className="aspect-square w-full rounded-2xl" baseColor="#202020" highlightColor="#444" />
                            <Skeleton count={3} height={50} className="mb-2" baseColor="#202020" highlightColor="#444" />
                            <Skeleton height={56} borderRadius={12} baseColor="#202020" highlightColor="#444" />
                        </div>
                    </div>

                    {/* Right Column Skeleton */}
                    <div className="flex-1 py-8 lg:pl-8">
                        {/* Sections Skeleton */}
                        <div className="space-y-16">
                            {/* Hero */}
                            <div className="space-y-4">
                                <Skeleton width="80%" height={60} baseColor="#202020" highlightColor="#444" />
                                <Skeleton count={3} baseColor="#202020" highlightColor="#444" />
                                <div className="flex gap-4">
                                    <Skeleton width={140} height={50} borderRadius={12} baseColor="#202020" highlightColor="#444" />
                                    <Skeleton width={140} height={50} borderRadius={12} baseColor="#202020" highlightColor="#444" />
                                </div>
                            </div>

                            {/* Generic Section */}
                            <div className="space-y-4">
                                <Skeleton width="40%" height={40} className="mb-6" baseColor="#202020" highlightColor="#444" />
                                <Skeleton count={5} baseColor="#202020" highlightColor="#444" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
