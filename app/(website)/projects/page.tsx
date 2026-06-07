import { sanityFetch } from "@/sanity/lib/live"
import { portfolioQuery } from "@/sanity/lib/queries"
import { PortfolioData } from "@/types/sanity"
import { DataFetchFallback } from "@/components/ui/DataFetchFallback"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { ProjectsPageContent } from "@/components/features/projects/ProjectsPageContent"

export default async function ProjectsPage() {
    let data: PortfolioData | null = null
    let error = false

    try {
        const timeoutPromise = new Promise<{ data: null }>((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out")), 10000)
        )

        const fetchPromise = sanityFetch({ query: portfolioQuery }) as Promise<{ data: PortfolioData | null }>

        const result = await Promise.race([fetchPromise, timeoutPromise])
        data = result.data
    } catch (err) {
        console.error("Data fetching failed or timed out:", err)
        error = true
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <DataFetchFallback
                    message="We couldn't load the projects in time. Please check your connection and try again."
                />
            </div>
        )
    }

    if (!data) return null

    return (
        <>
            <ScrollToTop />
            <ProjectsPageContent data={data} />
        </>
    )
}
