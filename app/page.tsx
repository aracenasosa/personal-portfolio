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
import { ReviewsSection } from "@/components/features/reviews/ReviewsSection";
import { ProfileCard } from "@/components/layout/profile-card";
import { RightNav } from "@/components/layout/right-nav";

export default async function Home() {

  const { data } = await sanityFetch({ query: portfolioQuery }) as { data: PortfolioData | null };
  console.log(data);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <RightNav />

        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Left Column - Fixed Profile */}
            <div className="hidden lg:block w-[400px] relative">
              {/*profile*/}
              <ProfileCard data={data.profile} />
            </div>

            {/* Mobile Profile (visible only on small screens) */}
            <div className="lg:hidden w-full mt-8">
              <div className="relative w-full flex flex-col gap-6 p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
                {/* Simplified content for mobile if needed, or just reuse components structure but not fixed */}
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Carlos</h1>
                  <span className="text-xs font-medium text-muted-foreground">Full-Stack JavaScript Developer</span>
                </div>
                {/* ... rest of profile content ... */}
                <p className="text-sm text-muted-foreground">Check desktop view for full experience</p>
              </div>
            </div>

            {/* Right Column - Scrollable Content */}
            <div className="flex-1 py-8 lg:pl-8">
              {/* Header / Theme Toggle */}
              <div className="flex justify-end mb-12">
                <ThemeToggle />
              </div>

              {/* Sections */}
              <HeroSection data={data.introduction} />
              <ProjectsSection projects={data.projects} />
              <WorkEducationSection data={data.resume} />
              <AboutSection data={data.about} />
              <ReviewsSection />
              <ContactSection />

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
