import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { HeroSection } from "@/components/features/hero/HeroSection";
import { AboutSection } from "@/components/features/about/AboutSection";
import { WorkEducationSection } from "@/components/features/education/WorkEducationSection";
import { SkillsSection } from "@/components/features/skills/SkillsSection";
import { ContactSection } from "@/components/features/contact/ContactSection";
import ProjectsSection from "@/components/features/projects/ProjectsSection";
import { sanityFetch } from "@/sanity/lib/live";
import { portfolioQuery } from "@/sanity/lib/queries";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PortfolioData } from "@/types/sanity";
import { RecommendationsSection } from "@/components/features/recommendations/RecommendationsSection";
import { ProfileCard } from "@/components/layout/profile-card";
import { RightNav } from "@/components/layout/right-nav";
import { DataFetchFallback } from "@/components/ui/DataFetchFallback";

export default async function Home() {

  let data: PortfolioData | null = null;
  let error = false;

  try {
    const timeoutPromise = new Promise<{ data: null }>((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), 10000)
    );

    const fetchPromise = sanityFetch({ query: portfolioQuery }) as Promise<{ data: PortfolioData | null }>;

    const result = await Promise.race([fetchPromise, timeoutPromise]);
    data = result.data;
  } catch (err) {
    console.error("Data fetching failed or timed out:", err);
    error = true;
  }

  if (error) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <DataFetchFallback message="We couldn't load the portfolio data in time. Please check your connection and try again." />
        </div>
      </main>
    );
  }

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <RightNav />

        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Mobile Theme Toggle */}
            <div className="flex justify-end lg:hidden mt-4 px-4">
              <ThemeToggle />
            </div>

            {/* Left Column - Fixed Profile */}
            <div className="w-full [@media(min-width:531px)_and_(max-width:1023px)]:w-[95%] [@media(min-width:531px)_and_(max-width:1023px)]:max-w-[700px] [@media(min-width:531px)_and_(max-width:1023px)]:mx-auto lg:w-[400px] relative px-4 lg:px-0">
              {/*profile*/}
              <ProfileCard data={data.profile} />
            </div>

            {/* Right Column - Scrollable Content */}
            <div className="flex-1 py-8 lg:pl-8">
              {/* Header / Theme Toggle (Desktop) */}
              <div className="hidden lg:flex justify-end mb-12">
                <ThemeToggle />
              </div>

              {/* Sections */}
              <section id="home">
                <HeroSection data={data.introduction} />
              </section>
              <section id="about">
                <AboutSection data={data.about} />
              </section>
              <section id="projects">
                <ProjectsSection projects={data.projects} />
              </section>
              <section id="skills">
                <SkillsSection data={data.skills} />
              </section>
              <section id="work-education">
                <WorkEducationSection data={data.resume} />
              </section>
              <section id="recommendations">
                <RecommendationsSection data={data.recommendations} />
              </section>

              <footer className="py-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                © 2025 Carlos Aracena. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
