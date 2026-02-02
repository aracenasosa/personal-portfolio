import type { Metadata } from "next";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { portfolioQuery } from "@/sanity/lib/queries";
import { PortfolioData } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata(): Promise<Metadata> {
    let data: PortfolioData | null = null;

    try {
        const timeoutPromise = new Promise<{ data: null }>((_, reject) =>
            setTimeout(() => reject(new Error("Metadata fetch timed out")), 5000)
        );

        const fetchPromise = sanityFetch({ query: portfolioQuery }) as Promise<{ data: PortfolioData | null }>;

        const result = await Promise.race([fetchPromise, timeoutPromise]);
        data = result.data;
    } catch (error) {
        console.error("Error fetching metadata:", error);
        // Fallback to null data which triggers default values below
    }

    const favicon = data?.profile?.image ? urlFor(data.profile.image).width(64).height(64).url() : "/favicon.ico";

    return {
        title: "Carlos Aracena - Portfolio",
        description: data?.introduction?.description || "Personal portfolio showcasing my projects and skills.",
        icons: {
            icon: favicon,
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                {children}
                <SanityLive />
            </body>
        </html>
    );
}
